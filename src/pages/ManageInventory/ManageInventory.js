import axios from "axios";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const ManageInventory = () => {
  const [user] = useAuthState(auth);
  const [product, setProduct] = useState({
    name: "",
    email: user?.email,
    price: "",
    qty: "",
    supplier: "",
    description: "",
    img:""
  });
  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:4000/addProduct',product)
    .then(result=>console.log(result))
    e.target.reset();
  };
  return (
    <div>
        <h3 className="text-center text-decoration-underline">Add Product</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter Product Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="number"
            name="price"
            placeholder="Enter Product Price"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="image">
          <Form.Label>Image Link</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="img"
            placeholder="Enter Product Image Link"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="Qty">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="number"
            name="qty"
            placeholder="Enter Product Qty"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="supplier">
          <Form.Label>Supplier</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            name="supplier"
            placeholder="Enter Product Supplier Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            onChange={handleChange}
            type="text"
            as="textarea"
            style={{ height: "100px" }}
            name="description"
            placeholder="Enter Product Description"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default ManageInventory;
