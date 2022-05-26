from flask import Flask, render_template, url_for
from __init__ import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/scrollmagic")
def scrollmagic():
    return render_template("scrollmagic.html", title="Scroll Magic", image="/static/images/scrollmagic-alt.webp")

@app.route("/design")
def design():
    return render_template("design.html", title="Design and CSS", image="/static/images/design-and-css.png")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)