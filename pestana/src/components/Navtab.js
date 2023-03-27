import { useState } from "react";

function Navtab() {
    const [links, setLinks] = useState([
        {
            text: 'Pestaña1',
            content: "Esta es la Pestaña 1",
            selected: false
        },
        {
            text: 'Pestaña2',
            content: "Esta es la Pestaña 2",
            selected: false
        },
        {
            text: 'Pestaña3',
            content: "Esta es la Pestaña 3",
            selected: false
        }
    ])

    function seleccionaPestana(indice_act) {
        //mostramos el indice de la pestaña seleccionada
        console.log(indice_act);
        const newLinks = links.map((link, ind_link) => {
            return {
                text: link.text,
                content: link.content,
                selected: indice_act === ind_link
            }
        }
        )
        setLinks(newLinks)
    }


    return (
        <div className="navtab">
            <div className="tabs">
                {links.map((link, indice) =>
                    <button onClick={ev => seleccionaPestana(indice)} key={link.text} className={link.selected ? "tab-item seleccion" : "tab-item"}>{link.text}</button>
                )}
            </div>
            <div className="tab-view">
                {
                    links.find(link => link.selected).content
                }
            </div>
        </div>
    );
}

export default Navtab;