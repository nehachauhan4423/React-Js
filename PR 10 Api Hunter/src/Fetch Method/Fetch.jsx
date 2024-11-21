import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Style2.css";

function Fetch() {
  const [products, setProducts] = useState([]);
  const [setError] = useState("");

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
    <div align="center">
      <div className="container py-5">
        <h1 className="text-center mb-4" style={{ fontFamily: "serif", fontWeight: "700" }}>
          Products Calling For Fetch Method
        </h1>
        <div className="row">
  {products.map((val) => (
    <div className="col-md-4 mb-4 col-12 col-sm-6 col-lg-4" key={val.id}>
      <div className="card-1 border-0 shadow-sm m-3">
        <img
          src={val.thumbnail}
          className="card-1-img-top"
          alt={val.title}
          style={{
            height: "200px",
            objectFit: "cover",
            borderTopLeftRadius: "1rem", // Adjust to match card's radius
            borderTopRightRadius: "1rem", // Adjust to match card's radius
          }}
        />
        <div className="card-1-body">
          <h5 className="card-1-title text-truncate" title={val.title}>
            {val.title}
          </h5>
          <h6>Category: {val.category}</h6>
          <p
            className="card-1-text text-muted"
            style={{ fontSize: "0.9rem", height: "50px", overflow: "hidden" }}
          >
            {val.description}
          </p>
          <p className="card-1-text fw-bold">Price: ${val.price}</p>
         <div className="d-flex">
         <p>Rating: {val.rating}⭐</p>
         <p className="justify-content-end align-items-end">Discount: {val.discountPercentage}%</p>
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

export default Fetch;
