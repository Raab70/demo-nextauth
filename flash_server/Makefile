.PHONY: lock lint makemigrations migrate run

lock:
	poetry lock

lint:
	poetry run black .

makemigrations:
	poetry run python manage.py makemigrations

migrate:
	poetry run python manage.py migrate

run: migrate
	poetry run python manage.py runserver