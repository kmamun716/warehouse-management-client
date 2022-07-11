import { Link } from "react-router-dom";
import Banner from "../../components/Home/Banner";
import OurService from "../../components/Home/OurService";
import VegitableItems from "../../components/Home/VegitableItems";
import useVegitables from "../../customHooks/useVegitables";
import "./Home.css";

const Home = () => {
  const [vegetables] = useVegitables();
  return (
    <div>
      <div>
        <Banner />
      </div>
      <main>
        <div className="bg-secondary bg-opacity-25 py-2 d-flex justify-content-around">
          <h3>Vegetables</h3>
          <Link className="text-decoration-none" to="/vegetables">
            Show All Vegetables
          </Link>
        </div>
        <VegitableItems vegetables={vegetables?.slice(0, 6)} />
      </main>
        <div className="my-3">
          <h3 className="text-center text-decoration-underline">
            Our Services
          </h3>
          <OurService />
        </div>
        <div>
        <h3 className="text-center text-decoration-underline">
            Contact Us
          </h3>
          <div>
            <textarea style={{"height": "100px"}} type="text" as='' className="form-control" />
            <button className="btn btn-success mt-2">Send Your Message</button>
          </div>
        </div>
    </div>
  );
};

export default Home;
