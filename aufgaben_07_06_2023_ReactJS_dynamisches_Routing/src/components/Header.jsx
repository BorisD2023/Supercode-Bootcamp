import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <header className="App">
          <nav>
            <h1>Super Carlist</h1>
            <NavLink to="/">Home</NavLink>  
          </nav> 
        </header>
      );
}
 
export default Header;