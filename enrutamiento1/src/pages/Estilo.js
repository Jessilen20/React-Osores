import { useParams } from "react-router-dom";

function Estilo() {
    const {item, color1, color2} = useParams()

    return(
        <div style={{backgroundColor: color2}}>
            <p style={{color: color1}}> The word is: {item}</p>
        </div>
    );
}

export default Estilo;