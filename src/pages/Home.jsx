import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // const store = useSelector((state) => state);
  // console.log(store);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default Home;
