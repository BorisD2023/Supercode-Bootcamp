import Products from "./Products";

const ProductList = () =>{
    const productArray = [
        {
            img: "./img/bottle.jpeg",
            name: "Cocooil",
            preis: "30$",
        },
        {
            img: "./img/kamera.avif",
            name: "Poloroid",
            preis: "60$",
        },
        {
            img: "./img/shampoo.webp",
            name: "Maui Moisture",
            preis: "20$",
        },
    ]

    return (
        <>
            {productArray.map((product, i) => <Products 
            key={i}
            image={product.img}
            product={product.name}
            preis={product.preis} />)}
        </>
    )
}

export default ProductList