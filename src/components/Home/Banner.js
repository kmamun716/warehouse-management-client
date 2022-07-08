import { Carousel } from "react-bootstrap";
import useVegitables from "../../customHooks/useVegitables";

const Banner = () => {
    const [vegitables] = useVegitables();
    const randomNumber = Math.ceil(Math.random()* vegitables.length-2);
  return (
    <div className="banner-bg my-2 rounded">
      <Carousel>
        <Carousel.Item>
        <img
      className="d-block w-100"
      height='500px'
      src={vegitables[randomNumber]?.img}
      alt={vegitables[randomNumber]?.name}
    />
          <Carousel.Caption>
            <h3>{vegitables[randomNumber]?.name}</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
      height='500px'
      className="d-block w-100"
      src={vegitables[randomNumber+1]?.img}
      alt={vegitables[randomNumber+1]?.name}
    />
          <Carousel.Caption>
            <h3>{vegitables[randomNumber+1]?.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <img
      className="d-block w-100"
      height='500px'
      src={vegitables[randomNumber-1]?.img}
      alt={vegitables[randomNumber-1]?.name}
    />
          <Carousel.Caption>
            <h3>{vegitables[randomNumber-1]?.name}</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
