import Banner from "../../components/Home/Banner";
import VegitableItems from "../../components/Home/VegitableItems";
import './Home.css';

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
            </div>
            <main>
                <VegitableItems/>
            </main>
        </div>
    );
};

export default Home;