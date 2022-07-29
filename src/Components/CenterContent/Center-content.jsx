 import styles from './Center-content.css'
 import arrowRight from '../../images/center/arrow-right.svg'


const CenterContent = () => {
    return (
        <div className='center-content'>
            <div className='top-tabs'>
       <h3>Alege tipul de asigurare</h3>
            <ul className='menu-list'>
                <li className='item'>Carte verde</li>
                <li  className='item'>RCA</li>
                <li className='item'>Casco</li>
                <li className='item'>Medicala</li>
                <li className='item'>Accidente</li>
                <li className='item'>Bunuri</li>
                <li className='item'>Locuinte imobile</li>
                <li className='container-for-arrow'>Altele <img src={arrowRight} alt=""/></li>
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