import './Slider-RCA5.css'
import sprite from "../../images/center/sprite.svg";
import livrare from "../../images/icons/image 7.png";

const SliderRCA5 = () => {
    return (<div className="slider-rca5">
            <h3 className='title-slider'>Numaru de locuri</h3>
            <div className="container-step">
                <span className='input-title'>Sunteti pensionar sau aveti grad de invaliditate?</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>DA</span>
                    </div>
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>NU</span>
                    </div>
                </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Aţi mai încheiat contract de asigurare RCA?</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>DA</span>
                    </div>
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>NU</span>
                    </div>
                </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Asigurare pentru remorci</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>DA</span>
                    </div>
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>NU</span>
                    </div>
                </div>
            </div>
            <div className="final-price">
                <div className="price">
                    <span className='price-number'>153</span>
                    <svg className="dollar">
                        <use href={sprite + "#$"}></use>
                    </svg>
                </div>
                <span className='plus'>+</span>
                <img src={livrare} alt=""/>
                <span className="free-delivery">Livrare gratuita</span>
            </div>
        </div>

    )
}



export default SliderRCA5