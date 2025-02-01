from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def run():
    return jsonify({"message": "Welcome to the world of Gumball"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=3000, debug=True)
