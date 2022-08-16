import './SliderCasco4.css'
import sprite from '../../images/center/sprite.svg'
import livrare from '../../images/icons/image 7.png'


const SliderCasco4 = () => {
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
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>RM</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>RM + CSI</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>RM + CSI + EU + TURCIA</p>
                    </div>
                </div>
            </label>
            <div className="container-input">
                <span className='input-title'>Fransiza</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Fără Franșiză</p>
                    </div>

                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Cu aplicarea franșizei</p>
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

export default SliderCasco4