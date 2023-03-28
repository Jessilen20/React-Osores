import {useState} from 'react';

const Listatareas = () =>{
    const [tareas, setTareas] = useState([]);
    const [nombretarea, setNombretarea] = useState("");
    const [listo, setListo] = useState(false);

    //se agrega una tarea
    const agregar = (ev) =>{
        //ev.preventDefault();
        setTareas(
            [...tareas, {nombretarea: nombretarea, listo: listo}]
        )
        setNombretarea("")
    }

    const escribiendo = (e) =>{
        setNombretarea(e.target.value);
    }

    //Se elimina una tarea
    const eliminar = (ev) =>{
        //tarea a eliminar
        console.log(ev.target.dataset.key);
        //filtramos todo menos la tarea a eliminar
        const newlist = tareas.filter(tarea => tarea.nombretarea !== ev.target.dataset.key);
        //se muestra la nueva lista - consola
        console.log(newlist);
        //se muestra en el front
        setTareas(newlist)
    }

    const darCheck = (index) =>{
        var listTemp = [...tareas];
        var newValue = (listTemp[index].listo === true ? false : true)
        listTemp[index].listo = newValue;
        setListo(newValue);
    }

    return (
        <div>
            <input type="text" value={nombretarea} placeholder="Ingresar la tarea" onChange={escribiendo}></input>
            <button onClick={agregar}>Agregar</button>
            <div>
                {
                    tareas.map((tarea, index) =>{
                        return <div className='tareaforma' key={index}>
                            <input type="checkbox" checked={tarea.listo} onClick={() => darCheck(index)}></input>
                            <p className={(tarea.listo) ? "realizado" : ""}> Tarea agregada: {tarea.nombretarea}</p>
                            <button  data-key={tarea.nombretarea} onClick={eliminar}>Eliminar</button>
                        </div>
                    }
                        
                    )
                }
            </div>
        </div>
    );
}

export default Listatareas;