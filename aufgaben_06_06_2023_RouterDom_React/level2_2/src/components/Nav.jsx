import { Link } from "react-router-dom";


const Nav = () => {
    return ( 
        <>
         <header>
            <h3>My Life</h3>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/Blog">Blog</Link>
            </nav>
        </header>
        </>
     );
}
 
export default Nav;