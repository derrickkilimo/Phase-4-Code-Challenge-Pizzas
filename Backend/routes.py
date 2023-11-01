from PizzaHut import app
from flask import request, jsonify

# Define your API routes here

# Define sample data for demonstration
restaurants = [{'id': 1, 'name': 'Restaurant 1'}, {'id': 2, 'name': 'Restaurant 2'}]
restaurant_pizza = {'id': 1, 'pizza_name': 'Pizza 1', 'restaurant_name': 'Restaurant 1'}

@app.route('/restaurants', methods=['GET'])
def get_restaurants():
    # Your code to fetch and return restaurants goes here
    return jsonify(restaurants)

@app.route('/restaurant_pizzas', methods=['POST'])
def create_restaurant_pizza():
    # Your code to create a restaurant pizza goes here
    return jsonify(restaurant_pizza), 201
