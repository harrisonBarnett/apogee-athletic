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
    #REINITIALIZE BEFORE PUSHING PROD
    # if request.method=="POST":
    #     msg = Message('Website Ping', sender=request.form['contact-email'], recipients=['harrisonbatc@gmail.com'])
    #     msg.body = request.form['contact-email'] + ' just pinged you on the Apogee Athletic website'
    #     mail.send(msg)
    return render_template("index.html")