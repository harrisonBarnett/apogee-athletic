from flask import Flask

def make_app():
    app = Flask(__name__)
    app.config['SECRET_KEY'] = "example"


    from .view import view
    app.register_blueprint(view, url_prefix="/")

    return app