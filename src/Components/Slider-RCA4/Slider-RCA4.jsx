import './Slider-RCA4.css'


const SliderRCA4 = () => {
    return (
        <div className="slider-rca4">
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
        </div>
    )
}

export default SliderRCA4