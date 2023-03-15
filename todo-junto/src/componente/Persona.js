import {Component} from "react";

class Persona extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
        }
    }

    sumar = () =>{
        this.setState({age:this.state.age + 1});
    }

    render() {
        const {name, lastname, colorHair} = this.props;

        return(
            <div>
                <h2>{lastname}, {name}</h2>
                <div>
                <p>Age: {this.state.age} </p>
                <p>Hair Color: {colorHair}</p>
                <button onClick={this.sumar}>Button Birthday for {name} {lastname}</button>
                </div>
            </div>
        );
    }
}

export default Persona;