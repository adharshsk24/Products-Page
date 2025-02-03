import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products")
      .then(response => setProducts(response.data.products))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {products.map(product => (
          <div key={product.id} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "10px" }}>
            <img src={product.thumbnail} alt={product.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <p><strong>Price: </strong>${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
