import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import SingleProduct from "./SingleProduct";

const MyProduct = () => {
  const [user] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [deleted, setDeleted] = useState(false);
  useEffect(() => {
    fetch(`http://localhost:4000/myProduct?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [user, deleted]);
  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/product/${id}`, id).then((result) => {
      console.log(result);
      setDeleted(true)
    });
  };
  return (
    <div className="row">        
      <h3 className="text-center">Your Products</h3>
      {products.length? products.map((product) => (
        <SingleProduct
          handleDelete={handleDelete}
          product={product}
          key={product._id}
        />
      )):<p className="text-center my-2">No Product Found <Link to='/manage'>Please Insert Product</Link></p>}
    </div>
  );
};

export default MyProduct;
