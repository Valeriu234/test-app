import './SliderCasco4.css'
import sprite from '../../images/center/sprite.svg'
import livrare from '../../images/icons/image 7.png'
import {useEffect,useState} from "react";




const SliderCasco4 = ({ priceState, oneOfTwo,setOneOfTwo, oneOfThree , setOneOfThree, changeDisabled, inputText, setInputText, faraFransiza, fransiza, setFransiza, setFaraFransiza, lastPageFirstInput,lastPageSecondInput,lastPageThirdInput,setLastPageFirstInput,setLastPageSecondInput,setLastPageThirdInput}) => {
    const arr =['Valera','Laura','Pentuchy'];
    const data = [
        {
            value: 1,
            label: "ALFA ROMEO"
        },
        {
            value: 2,
            label: "BENTLEY"
        },
        {
            value: 3,
            label: "BMW"
        },
        {
            value: 4,
            label: "CHEVROLET"
        }
    ]


    const toggle = (value,setValue) => {
     return    setValue(!value)
    }
useEffect(() => {
    if (lastPageFirstInput === true || lastPageSecondInput === true || lastPageThirdInput === true) {
        setOneOfThree(true)
    }else {
        setOneOfThree(false)
    }
},[lastPageFirstInput,lastPageSecondInput,lastPageThirdInput])

    useEffect(() => {
    if (fransiza === true || faraFransiza === true ) {
        setOneOfTwo(true)
    }else {
        setOneOfTwo(false)
    }
},[fransiza,faraFransiza])




useEffect(() => {
    if (inputText === true && oneOfTwo === true && oneOfThree === true){
        changeDisabled(false)
    } else {
        changeDisabled(true)
    }
},[inputText,oneOfTwo,oneOfThree])


    return (
        <div className='slider-casco3'>
            <h3 className='title-slider2'>Alege valoarea pe peata</h3>
            <label className='container-input' htmlFor="valoarea">
                <span className='input-title'>Alege valoarea de peata ( € )</span>
                <input className='custom-input' placeholder='0' onChange={(e) => {
                    if (e.target.value.length > 0) {
                        setInputText(true)
                    }else {
                        setInputText(false)
                    }
                }} type='number'/>
            </label>
            <label className='teritoriu' htmlFor="teritoriu">
                <span className='input-title'>Teritoriu de acoperire CASCO</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span onClick={() => {
                                toggle(lastPageFirstInput,setLastPageFirstInput)
                            }} className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>RM</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span onClick={() => {
                                toggle(lastPageSecondInput,setLastPageSecondInput)
                            }} className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>RM + CSI</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span onClick={() => {
                                toggle(lastPageThirdInput,setLastPageThirdInput)
                            }} className="checkmark"></span>
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
                            <span className="checkmark" onClick={() => {
                                toggle(faraFransiza,setFaraFransiza)
                            }}></span>
                        </label>
                        <p className='text-checkbox'>Fără Franșiză</p>
                    </div>

                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span onClick={() => {
                                toggle(fransiza,setFransiza)
                            }} className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Cu aplicarea franșizei</p>
                    </div>
                    </div>
                </div>

          <div className={priceState? "final-price" : 'active-final-price'}>
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