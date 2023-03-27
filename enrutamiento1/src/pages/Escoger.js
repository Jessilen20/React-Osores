import { useParams } from "react-router-dom";

function Escoger() {
    const { item } = useParams()

    return (
        (isNaN(item) ? <p>The word is: {item}</p> : <p>The number is: {item}</p>)
    );
}

export default Escoger;