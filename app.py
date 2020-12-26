import numpy as np
from flask import Flask, request, jsonify, render_template
import pickle

app = Flask(__name__)
model = pickle.load(open('svr_trained_model.pkl', 'rb'))

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/', methods=['POST'])
def predict():

    if request.method =='POST':
        inputs = []

        inputs.append(float(request.form['openPrice']))
        inputs.append(float(request.form['high']))
        inputs.append(float(request.form['low']))
        inputs.append(float(request.form['close']))
        inputs.append(float(request.form['volume']))

        final_inputs = [np.array(inputs)]
        prediction = model.predict(final_inputs)
        
        return render_template('index.html', predicted_result = prediction, openPrice = inputs[0], high = inputs[1],low = inputs[2], close = inputs[3], volume = inputs[4])

    else:
        return render_template('index.html')

if __name__ == "__main__":
    app.run(debug=True) 