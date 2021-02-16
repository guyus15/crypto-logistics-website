from flask import Flask, render_template, request, redirect
import smtplib
from email.mime.text import MIMEText

email_login = "websitemailer4@gmail.com"
password = "LogitechTHX"

fp = open("text_file.txt", "rb")
msg = MIMEText(fp.read())
fp.close()


app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/contact')
def contact():
  return render_template("contact.html")

@app.route('/submit-query', methods=['POST'])
def submit_query():
  name = request.form['name']
  email = request.form['email']
  subject = request.form['subject']
  query = request.form['query']

  msg = "Query from " + name + "\n\n" + query

  with smtplib.SMTP_SSL('smtp.gmail.com', 465) as smtp:
    smtp.sendmail(email_login, 'crypto-logistics@mail.com', msg)

  return redirect("/")

@app.route('/start-now')
def start_now():
  return render_template("start-now.html")

@app.route('/terms-and-conditions')
def t_and_c():
  return render_template("t&cs.html")

if __name__ == "__main__":
  app.run()
