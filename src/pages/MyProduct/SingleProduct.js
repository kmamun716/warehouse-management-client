import React from "react";
import { Button, Card } from "react-bootstrap";

const SingleProduct = ({ product, handleDelete }) => {
  const { _id, name, img, description, price, qty } = product;
  return (
    <div className="col-md-4 col-sm-12">
      <Card className="text-center">
        <Card.Body>
          <Card.Img variant="top" src={img} className="w-25" alt={name} />
          <Card.Title>Item: {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {qty}</Card.Text>
          <Button
            onClick={() => handleDelete(_id)}
            className="mx-2"
            variant="danger"
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleProduct;
