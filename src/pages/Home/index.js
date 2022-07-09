import { Link } from "react-router-dom";
import Banner from "../../components/Home/Banner";
import VegitableItems from "../../components/Home/VegitableItems";
import useVegitables from "../../customHooks/useVegitables";
import './Home.css';

const Home = () => {
    const [vegetables] = useVegitables();
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <main>
                <div className="bg-secondary bg-opacity-25 py-2 d-flex justify-content-around">
                    <h3>Vegetables</h3>
                    <Link className="text-decoration-none" to='/vegetables'>Show All Vegetables</Link>
                </div>
                <VegitableItems vegetables={vegetables?.slice(0,6)}/>
            </main>
        </div>
    );
};

export default Home;