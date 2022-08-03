import {useEffect, useState} from "react";
import axios from "axios";
import sprite from '../images/center/sprite.svg'


const DataFetching = () => {
    const [posts, setposts] = useState([])

    useEffect(() => {
    axios.get('http://localhost:3000/cards')
        .then(res => {
            setposts(res.data)
            console.log(posts,"post")
        })
        .catch(err => {
            console.log(err)
        })
    } ,[])
    useEffect(() =>{
        posts.map( i => console.log(i.description))

    },[posts])
    return ( <div className='cards+title'>
            <h4 className='slider1-title'>Alege tipul autovehiculului</h4>
        <div className='container-for-cards'>
            {
                posts.map((post) => {
                    return (
                    <div className='card' key={post.id}>
                        <svg className="icon-cars">
                            <use href={sprite + post.id}></use>
                        </svg>
                        <h4 className='card-description'>{post.description}</h4>
                    </div>
                    )
                })
            }
        </div>
        </div>
    )
}

export default DataFetching