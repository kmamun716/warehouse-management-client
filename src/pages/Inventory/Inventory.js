import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useParams } from "react-router-dom";

const Inventory = () => {
  const [vegetable, setVegetable] = useState({});
  const { id } = useParams();
  const { name, price, description, img, qty } = vegetable;
  useEffect(() => {
    fetch(`http://localhost:4000/vegetable?id=${id}`)
      .then((res) => res.json())
      .then((result) => setVegetable(result));
  }, [id]);
  const handleClicked=()=>{
    const quantity = qty-1;
    fetch(``,{
        method: 'UPDATE'
    })
    .then()
  }
  return (
    <div>
      <Card className="text-center">
        <Card.Header>Sale Your Item</Card.Header>
        <Card.Body>
          <Card.Img variant="top" src={img} className="w-25" alt={name} />
          <Card.Title>Item: {name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Text>Price: ${price}</Card.Text>
          <Card.Text>Quantity: {qty}</Card.Text>
          <Button variant="primary">Sell</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;
