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
    try{
      fetch(`https://warm-meadow-82274.herokuapp.com/myProduct?email=${user?.email}`,{
      headers:{
        authorization: `Bearer ${localStorage.getItem("accessToken")}`
      }
    })
      .then((res) => res.json())
      .then((data) => setProducts(data));
    } 
    catch(error) {
      console.log(error.response.status)
    }
  }, [user, deleted]);
  const handleDelete = (id) => {
    axios.delete(`https://warm-meadow-82274.herokuapp.com/product/${id}`, id).then((result) => {
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
