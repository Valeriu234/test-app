import './Slider-RCA1.css'


function SliderRca1() {
    return (
        <div className='slider-rca1'>
            <h3 className='title-slider'>Alege tipul autovehiculului</h3>
            <div className="container-step">
            <span className='input-title'>Teritoriu de acoperire CASCO</span>
            <div className="checkbox">
                <div className='button-check'>
                    <input className='button-checkbox' type="checkbox"/>
                    <span className='checkbox-text'>RM</span>
                </div>
            </div>
            </div>
            <div className="container-step">
                <span className='input-title'>Teritoriu de acoperire CASCO</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <input className='button-checkbox' type="checkbox"/>
                        <span className='checkbox-text'>RM</span>
                    </div>
                </div>
            </div>
            <div className='container-input'>
                <span className='input-title'>Alege valoarea de peata ( € )</span>
                <input className='input' placeholder='0'  type="text"/>
            </div>
        </div>
    );
}

export default SliderRca1;