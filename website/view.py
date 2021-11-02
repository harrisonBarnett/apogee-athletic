from flask import Blueprint, render_template, request, Flask
from flask_mail import Message, Mail

view = Blueprint('view', __name__)
app = Flask(__name__)
app.config.update(dict(
    MAIL_SERVER = 'smtp.gmail.com',
    MAIL_PORT = 465,
    MAIL_USE_TLS = False,
    MAIL_USE_SSL = True,
    MAIL_USERNAME = 'harrisonbatc@gmail.com',
    MAIL_PASSWORD = 'Apogee123'
))
mail = Mail(app)

@view.route("/", methods=["POST", "GET"])
def index():
    if request.method=="GET":
        return render_template("index.html")