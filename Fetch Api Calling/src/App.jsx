import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {

  const [products, setProducts] = useState([]);
  const [ setError] = useState("");


  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products); 
    } catch (err) {
      console.error(err);
      setError("Failed to fetch products.");  
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="my-4">Products</h1>
      <div className="row">
        { 
          products.map((val) => (
            <div className="col-md-4 mb-4" key={val.id}>
              <div className="card h-100">
                <img
                  src={val.thumbnail}
                  className="card-img-top"
                  alt={val.title}
                  style={{ maxHeight: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{val.title}</h5>
                  <p className="card-text text-truncate">
                    {val.description}
                  </p>
                  <p className="card-text fw-bold">${val.price}</p>
                  <a
                    href="#"
                    className="btn btn-primary"
                    onClick={(e) => e.preventDefault()}
                  >
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;






