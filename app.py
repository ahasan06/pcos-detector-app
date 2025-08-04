from flask import Flask, render_template, request

app = Flask(__name__, template_folder="tamplates")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/predict", methods=["POST"])
def predict():
    name = request.form.get("name")
    age = request.form.get("age")
    # Here you'd add model prediction logic
    result = f"Prediction complete for {name}, age {age}."
    return render_template("result.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)
