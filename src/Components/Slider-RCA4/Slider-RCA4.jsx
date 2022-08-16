import './Slider-RCA4.css'
import sprite from "../../images/center/sprite.svg";
import livrare from "../../images/icons/image 7.png";


const SliderRCA4 = () => {
    return (
        <div className="slider-rca4">
            <h3 className='title-slider'>Numaru de locuri</h3>
            <div className="container-step">
                    <span className='input-title'>Sunteti pensionar sau aveti grad de invaliditate?</span>
                <div className="checkbox">
                    <div className='button-check'>
                    <label className="container">
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                    <label className="container">
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                        <p className='text-checkbox'>Nu</p>
                    </div>
                </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Aţi mai încheiat contract de asigurare RCA?</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Nu</p>
                    </div>
            </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Asigurare pentru remorci</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Nu</p>
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

export default SliderRCA4