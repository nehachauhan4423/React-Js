import React, { useEffect, useState } from "react";
import Axios from "axios";
import {  } from "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [setError] = useState("");

  const fetchRecipes = async () => {
    try {
      const response = await Axios("https://dummyjson.com/recipes");
      setRecipes(response.data.recipes || []); 
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes.");
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div align="center" style={{backgroundColor:"whitsmoke"}}>
    <div className="container">
      <h1 className="text-center mb-5" style={{fontFamily:"serif",paddingTop:"25px",fontweight:"900"}}>Delicious  Recipes</h1>
      <div className="row">
        {recipes.map((val) => (
          <div className="col-md-4 mb-4" key={val.id}>
            <div className="card shadow-sm border-light rounded h-100">
              <img
                src={val.image}
                className="card-img-top"
                alt={val.name}
                style={{
                  height: "250px",
                  objectFit: "cover",
                  borderTopLeftRadius: "0.25rem",
                  borderTopRightRadius: "0.25rem",
                }}
              />
              <div className="card-body">
                <h5 className="card-title text-truncate" title={val.name}>
                  {val.name}
                </h5>
                <p className="card-text text-muted">
                  <strong>Ingredients:</strong> {val.ingredients.join(", ")}
                </p>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0">
                    <strong>Rating:</strong> {val.rating} ⭐
                  </p>
                  <p className="mb-0">
                    <strong>Total Reviews:</strong> {val.reviewCount}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  
  );
}

export default App;
