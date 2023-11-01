from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from PizzaHut import model
from flask_cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///pizza_restaurant.db'
db = SQLAlchemy(app)
ma = Marshmallow(app)

# Configure Cross-Origin Resource Sharing (CORS)
CORS(app)

# Define your models, routes, and other configurations here
