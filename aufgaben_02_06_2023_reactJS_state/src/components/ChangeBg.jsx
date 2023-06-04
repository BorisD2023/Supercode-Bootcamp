import { useState } from "react"

const ChangeBg = () =>{
    const [isDay, setIsDay] = useState(true)

    const click = () => {
        setIsDay(!isDay)
    }

    const backgroundColor = isDay ? '#ffffff' : '#000000';
    const textColor = isDay ? '#000000' : '#ffffff';
    const button = isDay ? 'Night' : 'Day';

    return (
        <div style={{backgroundColor, color: textColor}}>
        <h1>{button} Switch</h1>
        <button onClick={click}>{button}</button>
            
        </div>
    )
}

export default ChangeBg