import { Link } from "react-router-dom";


const ListItem = (props) => {
    
    const url = "/details/" + props.id.id
    return ( 
        <>
            <div className="listitem">
            <img src={props.id.img_url} alt={props.id.title} />
            <h3>{props.id.title}</h3>
            <Link to={url} >Read more</Link>
            </div>
        </>
     );
}
 
export default ListItem;