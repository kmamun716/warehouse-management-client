import { Button, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const VegitableItems = ({vegetables}) => {
  const navigate = useNavigate();
  return (
    <div className="row">
      {vegetables.map((vegetable) => (
        <div key={vegetable._id} className="col-md-4 col-sm-12 g-5">
          <Card>
            <Card.Img
              variant="top"
              height="300px"
              src={vegetable.img}
              alt={vegetable.name}
            />
            <Card.Body>
              <Card.Title>{vegetable.name}</Card.Title>
              <Card.Text>
                {vegetable.description.length > 70
                  ? vegetable.description.slice(0, 70) + " ..........."
                  : vegetable.description}
              </Card.Text>
              <ListGroup className="list-group-flush">
                <ListGroupItem>Quantity: {vegetable.qty} {vegetable.name === "Cauliflower"? "pcs" : "kg"}</ListGroupItem>
                <ListGroupItem>Supplier: {vegetable.supplier}</ListGroupItem>
                <ListGroupItem>Price: ${vegetable.price}/{vegetable.name === "Cauliflower"? "pcs" : "kg"}</ListGroupItem>
              </ListGroup>
              <Button variant="primary" onClick={()=>navigate(`/inventory/${vegetable._id}`)}>Details about {vegetable.name} &#8594;</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default VegitableItems;
