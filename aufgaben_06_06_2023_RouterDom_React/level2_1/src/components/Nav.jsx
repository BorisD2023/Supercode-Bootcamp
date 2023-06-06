import { Link } from "react-router-dom";
import Logo from "./Logo";

const Nav = () => {
    return ( 
        <header>
            <Logo />
        <nav>
            <Link to="/Speisekarte" >Speisekarte</Link>
            <Link to="/Kontakt">Kontakt</Link>
            <Link to="/Öffnungszeiten">Öffnungszeiten</Link>
            <Link to="/Gallery">Gallery</Link>
        </nav>
        </header>
     );
}
 
export default Nav;