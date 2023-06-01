const Products = (props) =>{
    return (
        <>
        <div>
            <img src={props.image} alt="" />
            <p>{props.product}</p>
            <p>{props.preis}</p>
            <button>Buy Now</button>
        </div>
        </>
    )

}

export default Products