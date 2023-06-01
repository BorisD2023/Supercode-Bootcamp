import Item from './Item'

const ItemList = () => {
    
    const itemArray = [
        {
            activity: "Bug ",
            name: "Grocery"
        },
        {
            activity: "Send ",
            name: "Email"
        },
        {
            activity: "Finish ",
            name: "Assignment"
        },
        {
            activity: "Write ",
            name: "Blog"
        },
        {
            activity: "Bake ",
            name: "Cake"
        },
    ]

    return(
        <>
        <h1>My Todos</h1>
        <ul className='ul'>
            {itemArray.map((item, i) => <Item firstLine={item.activity} secondLine={item.name}  key={i} />)}

        </ul>

        </>
    )
}

export default ItemList