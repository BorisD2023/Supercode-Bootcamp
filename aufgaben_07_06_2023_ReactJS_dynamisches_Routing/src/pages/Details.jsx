import { useParams } from "react-router-dom";
import Header from "../components/Header";
import cars from "../data/cars.json"

const Details = () => {
    const idParams = useParams()
    console.log({idParams});
    
    const detailCar = cars.filter((element) => {return element.id.toString() === idParams.supercar})
    console.log(detailCar);

    return ( 
        <section>
            <Header />
            <article className="detail-car">
                <h2>Marke: {detailCar[0].CarMake}</h2>
                <h3>Model: {detailCar[0].carModel}</h3>
                <h4>Baujahr: {detailCar[0].CarYear}</h4>
            </article>
        </section>
     );
}
 
export default Details;