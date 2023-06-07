import { useParams } from "react-router-dom";
import Carlist from "../components/CarList";
import Header from "../components/Header";
import cars from "../data/cars.json"

const Home = () => {
    

    return ( 
        <section>
            <Header />
            <Carlist />
        </section>
     );
}
 
export default Home;