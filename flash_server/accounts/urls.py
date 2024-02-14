from django.urls import include, path
from rest_framework_simplejwt.views import TokenVerifyView
from dj_rest_auth.jwt_auth import get_refresh_view
from dj_rest_auth.registration.views import RegisterView


urlpatterns = [
    path("register/", RegisterView.as_view(), name="rest_register"),
    path("auth/", include("dj_rest_auth.urls")),
    # api/accounts/auth/password/reset/ [name='rest_password_reset']
    # api/accounts/auth/password/reset/confirm/ [name='rest_password_reset_confirm']
    # api/accounts/auth/login/ [name='rest_login']
    # api/accounts/auth/logout/ [name='rest_logout']
    # api/accounts/auth/user/ [name='rest_user_details']
    # api/accounts/auth/password/change/ [name='rest_password_change']
    # api/accounts/auth/token/verify/ [name='token_verify']
    # api/accounts/auth/token/refresh/ [name='token_refresh']
    path("token/refresh/", get_refresh_view().as_view(), name="token_refresh"),
    path("token/verify/", TokenVerifyView.as_view(), name="token_verify"),
]