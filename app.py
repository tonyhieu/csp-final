from flask import Flask, render_template, url_for
from __init__ import app

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/scrollmagic")
def scrollmagic():
    return render_template("scrollmagic.html", title="Scroll Magic", image="https://cms-assets.tutsplus.com/uploads/users/30/posts/23726/preview_image/scrollmagic.jpg")

@app.route("/design")
def design():
    return render_template("design.html", title="Design and CSS", image="https://media.istockphoto.com/photos/tropical-paradise-landscape-picture-id1033545162?k=20&m=1033545162&s=612x612&w=0&h=ZNemh8RD7XCM7sWrS7NXt-849G4uWON2631eSKQPWMk=")


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=8080, debug=True)