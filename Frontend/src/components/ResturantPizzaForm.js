import React, { useState } from "react";
import api from "../services/api";

function RestaurantPizzaForm() {
  const [formData, setFormData] = useState({
    price: 0,
    pizza_id: 1, // Default pizza ID
    restaurant_id: 1, // Default restaurant ID
  });

  const [errors, setErrors] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/restaurant_pizzas", formData);

      // Handle success (e.g., show a success message or redirect)
      console.log("RestaurantPizza created:", response.data);
    } catch (error) {
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.error("Error creating RestaurantPizza:", error);
      }
    }
  };

  return (
    <div>
      <h1>Create RestaurantPizza</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            id="price"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="pizza_id">Pizza ID:</label>
          <input
            type="number"
            id="pizza_id"
            name="pizza_id"
            value={formData.pizza_id}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="restaurant_id">Restaurant ID:</label>
          <input
            type="number"
            id="restaurant_id"
            name="restaurant_id"
            value={formData.restaurant_id}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit">Create RestaurantPizza</button>
      </form>
      {errors.length > 0 && (
        <div className="error-messages">
          <h2>Error:</h2>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default RestaurantPizzaForm;
