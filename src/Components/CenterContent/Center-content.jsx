 import './Center-content.css'
import sprite from '../../images/center/sprite.svg'
 import React, {useEffect,useState} from 'react'
 import Center from "./Center";
import axios from "axios";
import DataFetching from "../Data-fetching";


const CenterContent = () => {
    const [state, setstate] = useState(false);
    const [sort, setSort] = useState(false)

    const switchClass = () => {
        if (state !== staterca) {
            setstaterca(false);
            setstate(true);
        }

    }


const [staterca, setstaterca] = useState(false);
    const [states, setState] = useState('')
useEffect(()=>{

},[states])
    const [items] = useState([
        {
            title: "Carte verde"

        },
        {
            title: "RCA"
        },
        {
            title: "Casco"
        },
        {
            title: "Medicala"
        },
        {
            title: 'Accidente'
        },
        {
            title: 'Bunuri'
        },
        {
            title: 'Locuinte(imobile)'
        }
    ])

    return (
        <div className='center-content'>
            <div className='top-tabs'>
       <h3>Alege tipul de asigurare</h3>
                <ul className='menu-list'>
                    {items.map((item,index)=> <Center setState={setState} index={index} setSort={setSort} sort={sort} key={index} title={item.title} states={states}
                                                      switchClass={switchClass}/>)}

                        <li  className='container-for-arrow'>Altele
                            <svg className="arrow-right">
                            <use href={sprite + '#arrow-right'}></use>
                            </svg>
                        </li>
                </ul>
            </div>
            <div className="form">
                <div className="center-section1 ">
                    <h2 className='choose-vehicle'>Alege tipul autovehicului</h2>

                </div>
                <div className="center-section2">

                </div>
            </div>
        </div>
    )
}


export default CenterContent