import axios from "axios";

// Define the base URL for your backend API
const baseURL = "http://localhost:5000"; // Replace with your actual backend URL

// Create an instance of Axios with the base URL
const api = axios.create({
  baseURL,
});

// Define your API endpoints as functions
const apiEndpoints = {
  getRestaurants: () => api.get("/restaurants"),
  getRestaurant: (id) => api.get(`/restaurants/${id}`),
  deleteRestaurant: (id) => api.delete(`/restaurants/${id}`),
  getPizzas: () => api.get("/pizzas"),
  createRestaurantPizza: (data) => api.post("/restaurant_pizzas", data),
  // Add more endpoints as needed
};

export default apiEndpoints;
