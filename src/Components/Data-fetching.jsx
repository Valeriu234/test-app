import {useEffect, useState} from "react";
import axios from "axios";
import sprite from '../images/center/sprite.svg'
import {number} from "prop-types";


const DataFetching = ({changeDisabled}) => {
    const [appState, changeState] = useState({
        activeObject: null,
        objects: []
    })


    useEffect(() => {
        axios.get('http://localhost:3000/cards')
            .then(res => {
                changeState({...appState, objects: res.data})
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    useEffect(() => {
        if (appState.activeObject === null) {
            changeDisabled(true)
        } else if (appState.activeObject !== null) {
            changeDisabled(false)
        }

    }, [appState])

    const toggleActive = (index) => {
        changeState({...appState, activeObject: appState.objects[index]});
        if (appState.activeObject === null) {
            changeDisabled(false)
        }

    }


    const toggleActiveStyles = (index) => {
        if (appState.objects[index] === appState.activeObject) {
            return 'activeCard';
        } else {
            return 'card'
        }
    }


    return (<div className='cards+title'>
            <h4 className='slider1-title'>Alege tipul autovehiculului</h4>
            <div className='container-for-cards'>
                {
                    appState.objects.map((post, index) => {
                        return (
                            <div onClick={() => toggleActive(index)} className={toggleActiveStyles(index)} key={index}>
                                <svg className="icon-cars">
                                    <use href={sprite + post.id}></use>
                                </svg>
                                <h4 className={appState.objects[index] === appState.activeObject ? 'active-card-description' : 'card-description'}>{post.description}</h4>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DataFetching