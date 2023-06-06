import { useParams } from "react-router-dom";
import Nav from "../components/Nav";
import blogData from "../components/Data";

const Details = () => {

    const params = useParams()
    const id = params.id
    const element = blogData[id]

    return ( 
        <>
            <section>
                <Nav />
            </section>
            <section className="img-section">
            <img src={element.img_url} alt={element.title} />
            </section>
            <section className="text-section">
                <article className="titel">
                <h3>{element.title}</h3>
                <h5>{element.published_date}</h5>
                </article>
                <p>{element.description}</p>
                <h5>{element.author}</h5>
            </section>

            {/* <section className="img-section">
            <img src={blogData[0].img_url} alt={blogData[0].title} />
            </section>
            <section>
                <h3>{blogData[0].title}</h3>
                <h5>{blogData[0].published_date}</h5>
            </section>
            <section>
                <p>{blogData[0].description}</p>
                <h5>{blogData[0].author}</h5>
            </section> */}
            
        </>
     );
}
 
export default Details;