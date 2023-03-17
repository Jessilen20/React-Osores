import {React} from "react";

const PersonCard = props => {
        return(
            <div>
                <h2>{props.lastname}, {props.name}</h2>
                <div>
                <p>Age: {props.age} </p>
                <p>Hair Color: {props.colorHair}</p>
                </div>
            </div>
        );
}

export default PersonCard;