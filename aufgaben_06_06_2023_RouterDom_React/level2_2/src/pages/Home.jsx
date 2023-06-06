import { Link } from "react-router-dom";
import Nav from "../components/Nav";

const Home = () => {
    return ( 
        <>
            <section className="nav">
                <Nav />
            </section>
            <section className="blog">
                <h1>Welcome to my simple Blog</h1>
                <Link to="/Blog">Go to articles</Link>
            </section>
        </>
     );
}
 
export default Home;