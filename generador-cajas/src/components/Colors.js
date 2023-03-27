import {useState} from "react";

function Colors() {

    const [colors, setColors] = useState([])
    const [newColor, setNewColor] =useState('')
    const [newNum, setnewNum] =useState('')

    function cambiarColor(ev) {
        setNewColor(ev.target.value)
    }

    function cambiarTama(ev) {
        setnewNum(ev.target.value)
    }

    function addColor (ev) {
        ev.preventDefault()
        //Se agrega el nuevo color en la lista de colores
        setColors(
            [...colors,{color: newColor, tama: newNum}]
        )
        //Se limpia el input
        setNewColor('')
        setnewNum('')
    }

    return (
        <div className="colors">
            <form onSubmit={addColor}>
                <input type="text" required value={newColor} onChange={cambiarColor}/>
                <input type="text" required value={newNum} onChange={cambiarTama}/>
                <input type="submit" value="Crear" />
            </form>
            <div className="squares">
                {colors.map ((element) =>
                <div style={{ backgroundColor: element.color, height: element.tama, width: element.tama }}></div>
                    )}
            </div>

        </div>
    );
}

export default Colors;  