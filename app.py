from flask import Flask, render_template, request, redirect

app = Flask(__name__)

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/contact')
def contact():
  return render_template("contact.html")

@app.route('/submit-query', methods=['POST'])
def submit_query():
  email = request.form['email']
  print(email)
  return redirect("/")

@app.route('/start-now')
def start_now():
  return render_template("start-now.html")

if __name__ == "__main__":
  app.run(debug=True)