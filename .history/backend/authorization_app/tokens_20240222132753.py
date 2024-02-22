import jwt
import datetime

def generate_jwt_token(user):
    payload = {
        'user_id': user.id,
        'email': user.email,
    }

    # Replace 'your_secret_key' with your actual secret key
    token = jwt.encode(payload, 'django-insecure-*e-a95w3o95ry04xqm7ofle#ojt(_mby=ijas5m2=($4q^ji70', algorithm='HS256')

    return token