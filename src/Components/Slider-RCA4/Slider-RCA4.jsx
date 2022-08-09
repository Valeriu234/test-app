import './Slider-RCA4.css'


const SliderRCA4 = () => {
    return (
        <div className="slider-rca4">
            <h3 className='title-slider'>Numaru de locuri</h3>
            <div className="container-step">
                    <span className='input-title'>Sunteti pensionar sau aveti grad de invaliditate?</span>
                <div className="checkbox">
                    <label className="container">DA
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Nu
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Aţi mai încheiat contract de asigurare RCA?</span>
                <div className="checkbox">
                    <label className="container">DA
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Nu
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Asigurare pentru remorci</span>
                <div className="checkbox">
                    <label className="container">DA
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Nu
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

export default SliderRCA4