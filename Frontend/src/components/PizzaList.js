import React, { useState, useEffect } from "react";
import api from "../services/api";

function PizzaList() {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    async function fetchPizzas() {
      try {
        const response = await api.get("/pizzas");
        setPizzas(response.data);
      } catch (error) {
        console.error("Error fetching pizzas:", error);
      }
    }

    fetchPizzas();
  }, []);

  return (
    <div>
      <h1>Pizza List</h1>
      <ul>
        {pizzas.map((pizza) => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PizzaList;
