from flask import Flask, jsonify, request

app = Flask(__name__)

@app.route('/books', methods=['GET'])
def get_books():
    return jsonify({"message": "Here you will get the book list."})

if __name__ == '__main__':
    app.run(debug=True)
