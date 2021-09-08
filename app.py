from flask import Flask, render_template, request

import pandas as pd

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
	if (request.method == 'POST'):
		if ('path' in request.form):
			path = request.form['path']

			print(f'Reading data from {path}')
			try:
				df = pd.read_csv(path, low_memory=False)
			except FileNotFoundError:
				print('File not found')
				return render_template('index.html', error='File not found')

			return render_template('index.html', variables=df.columns, path=path)

		else:
			variables = list(request.form.keys())

			return 'Hello World'

	else: # request.method == 'GET'
		return render_template('index.html')
