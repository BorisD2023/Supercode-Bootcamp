import { NavLink } from "react-router-dom";
import cars from "../data/cars.json"

const Carlist = () => {
    return ( 
        <section className="grid">
            {cars.map((elm, index) => {
                return (
                    <div className="grid-item" key={index}>
                        <p>{elm.CarMake}</p>
                        <NavLink to={`/cars/${elm.id}`}>Read more</NavLink>
                    </div>
                )
            })}
        </section>
     );
}
 
export default Carlist;