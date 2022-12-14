import axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const [vegetable, setVegetable] = useState({});
  const [updated, setUpdated] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { name, price, description, img, qty } = vegetable;
  useEffect(() => {
    fetch(`https://warm-meadow-82274.herokuapp.com/vegetable?id=${id}`)
      .then((res) => res.json())
      .then((result) => setVegetable(result));
  }, [id, updated]);
  const handleClicked = () => {
    const newQty = qty - 1;
    axios.put(`https://warm-meadow-82274.herokuapp.com/vegetable/${id}`,{newQty})
      .then((data) => {
        console.log(data)
        setUpdated(!updated)
      });
  };
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
          <Button onClick={handleClicked} className="mx-2" variant="primary">
            Sell
          </Button>   
          <Button onClick={()=>navigate('/manage')} variant="info" className='mx-2'>
            Add Item
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Inventory;
