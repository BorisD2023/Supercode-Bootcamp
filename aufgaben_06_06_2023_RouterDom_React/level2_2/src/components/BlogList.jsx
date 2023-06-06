import blogData from "./Data"
import ListItem from "./ListItem"


const BlogList = () => {
    return ( 
        <article className="gallery">
            {blogData.map((item, index) => <ListItem id={item} key={index} />)}
        </article>
     );
}
 
export default BlogList;