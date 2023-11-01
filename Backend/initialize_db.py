from PizzaHut import app, db
from PizzaHut.models import Restaurant, Pizza, RestaurantPizza
def initialize_data():
    # Check if the data already exists
    if not Restaurant.query.first():
        # Create sample data for testing
        restaurant1 = Restaurant(name='Restaurant 1', address='Address 1')
        restaurant2 = Restaurant(name='Restaurant 2', address='Address 2')
        db.session.add(restaurant1)
        db.session.add(restaurant2)

    if not Pizza.query.first():  # Fixed a typo here (added "query.")
        # Create sample pizza data for testing
        pizza1 = Pizza(name='Pizza 1', ingredients='Ingredient 1')
        pizza2 = Pizza(name='Pizza 2', ingredients='Ingredient 2')
        db.session.add(pizza1)
        db.session.add(pizza2)

    db.session.commit()

if __name__ == "__main__":
    with app.app_context():
        initialize_data()
