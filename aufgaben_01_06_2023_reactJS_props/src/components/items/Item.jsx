
const Item = (props) => {
    console.log(props);
    return(
        <>
        <li>{props.firstLine}
            {props.secondLine}
        </li>
        </>
    )
}

export default Item