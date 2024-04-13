from flask import Flask, render_template, send_from_directory

app = Flask(__name__, static_url_path="")


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/react")
def react():
    return send_from_directory("static", "react.html")


@app.route("/api/numbers")
def numbers():
    return [1, 2, 3, 4, 5, 6, 7, 8, 9]
