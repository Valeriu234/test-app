import './Slider-casco3.css'



const SliderCasco3 = () => {
    return (
        <div className='slider-casco3'>
<h3 className='title-slider2'>Alege valoarea pe peata</h3>
            <label className='container-input' htmlFor="valoarea">
                <span className='input-title'>Alege valoarea de peata ( € )</span>
                <input className='input' placeholder='0'  type="text"/>
            </label>
            <label className='teritoriu' htmlFor="teritoriu">
                <span className='input-title'>Teritoriu de acoperire CASCO</span>
                <div className="checkbox">
                    <label className="container">RM
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">RM + CSI
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">RM + CSI + EU + TURCIA
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                </div>
            </label>
            <div className="container-input">
                <span className='input-title'>Fransiza</span>
                <div className="checkbox">
                    <label className="container">Fara Fransiza
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <label className="container">Cu aplicarea fransizei
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>

                </div>
            </div>

        </div>
    )
}

export default SliderCasco3