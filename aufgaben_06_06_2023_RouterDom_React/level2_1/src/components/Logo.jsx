import { Link } from "react-router-dom";

const Logo = () => {
    return ( 
        <div className="logo">
            <img src="./vite.svg" alt="logo" />
            <Link className="logo-link" to="/">Kim´s Cafe Köln</Link>
        </div>
     );
}
 
export default Logo;