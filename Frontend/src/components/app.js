import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import PizzaList from "./components/PizzaList";
import RestaurantPizzaForm from "./components/RestaurantPizzaForm";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Define your routes here */}
          <Route path="/" exact component={RestaurantList} />
          <Route path="/restaurants/:id" component={RestaurantDetail} />
          <Route path="/pizzas" component={PizzaList} />
          <Route
            path="/create-restaurant-pizza"
            component={RestaurantPizzaForm}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
