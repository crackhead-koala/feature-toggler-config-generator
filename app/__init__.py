from flask import Flask

from .views import views


def create_app() -> Flask:
    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'e14ce706f0bb4a16a8d2d9a98b3e0a9b'

    app.register_blueprint(views, url_prefix='/')
    return app
