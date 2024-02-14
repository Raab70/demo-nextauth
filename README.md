# Demo NextAuth JWT with Django Rest Framework

## Running The Demo
When you're ready, start your application by running:
`docker compose up --build`.

You'll want to create a user by posting to the API which is available on port 8000.
[httpie](https://httpie.io/cli) makes this easy but you can use any other tool.

```
http POST http://localhost:8000/api/accounts/register/ username=test email='test@test.com' password1=adminpass password2=adminpass
```

Once you have an account registered you can use it to login.

Visit http://localhost:3000/ and click login. This will take you to the nextauth signin page

Use the above username and password to login! Then you can click on your profile icon to test logging out.

## Local Development Environment

### Backend
```
pip install pip poetry wheel setuptools -U
poetry config virtualenvs.in-project true
poetry install --no-root
make run
```
The API server is now running on port 8000

[ref](https://matt.sh/python-project-structure-2024)

### Frontend
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/master/install.sh | bash
echo 'export PATH="$PATH:$NVM_DIR"' >> ~/.bashrc
nvm install --lts
npm install -g pnpm
cd flash && pnpm install
AUTH_SECRET=supersecret pnpm dev
```
The node server is now running at [http://localhost:3000](http://localhost:3000)

## Authentication
You can use the following flows to test out some authentication endpoints using [httpie](https://httpie.io/cli)
```
http POST http://localhost:8000/api/accounts/register/ username=test email='test@test.com' password1=adminpass password2=adminpass
```
```
TOKEN=$(http POST http://localhost:8000/api/accounts/auth/login/ username='test' password=adminpass | jq -r '.access')
```
```
http http://localhost:8000/api/accounts/auth/user/ Authorization:"Bearer $TOKEN"
http POST http://localhost:8000/api/accounts/token/verify/ token="$TOKEN"
```
200 means the token is valid, 4xx means it is no longer valid
```
http POST http://localhost:8000/api/accounts/auth/logout/ Authorization:"Bearer $TOKEN"
```