import './Slider-RCA4.css'
import sprite from "../../images/center/sprite.svg";
import livrare from "../../images/icons/image 7.png";
import {useEffect} from "react";


const SliderRCA4 = ({changeDisabled, fourthPageRCA, setFourthPageRCA, setPriceState, priceState}) => {
    useEffect(() => {
        if (fourthPageRCA.firstCheckbox === true || fourthPageRCA.secondCheckbox === true) {
            setFourthPageRCA({...fourthPageRCA, firstOneOfTwo: true})
        } else {
            setFourthPageRCA({...fourthPageRCA, firstOneOfTwo: false})
        }
    }, [fourthPageRCA.firstCheckbox, fourthPageRCA.secondCheckbox])
    useEffect(() => {
        if (fourthPageRCA.thirdCheckbox === true || fourthPageRCA.fourthCheckbox === true) {
            setFourthPageRCA({...fourthPageRCA, secondOneOfTwo: true})
        } else {
            setFourthPageRCA({...fourthPageRCA, secondOneOfTwo: false})
        }
    }, [fourthPageRCA.thirdCheckbox, fourthPageRCA.fourthCheckbox])
    useEffect(() => {
        if (fourthPageRCA.fivethCheckbox === true || fourthPageRCA.sixthCheckbox === true) {
            setFourthPageRCA({...fourthPageRCA, thirdOneOfTwo: true})
        } else {
            setFourthPageRCA({...fourthPageRCA, thirdOneOfTwo: false})
        }
    }, [fourthPageRCA.fivethCheckbox, fourthPageRCA.sixthCheckbox])


    useEffect(() => {
        if (fourthPageRCA.firstOneOfTwo && fourthPageRCA.secondOneOfTwo && fourthPageRCA.thirdOneOfTwo) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }, [fourthPageRCA.firstOneOfTwo, fourthPageRCA.secondOneOfTwo, fourthPageRCA.thirdOneOfTwo])


    const handleChange1 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, firstCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, firstCheckbox: false})
        }
    };
    const handleChange2 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, secondCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, secondCheckbox: false})
        }
    };
    const handleChange3 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, thirdCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, thirdCheckbox: false})
        }
    };
    const handleChange4 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, fourthCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, fourthCheckbox: false})
        }
    };
    const handleChange5 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, fivethCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, fivethCheckbox: false})
        }
    };
    const handleChange6 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setFourthPageRCA({...fourthPageRCA, sixthCheckbox: true})
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setFourthPageRCA({...fourthPageRCA, sixthCheckbox: false})
        }
    };


    useEffect(() => {
        console.log(fourthPageRCA)
    }, [fourthPageRCA])
    return (
        <div className="slider-rca4">
            <h3 className='title-slider'>Numaru de locuri</h3>
            <div className="container-step">
                <span className='input-title'>Sunteti pensionar sau aveti grad de invaliditate?</span>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange1} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange2} type="checkbox" width='16px' height='16px'/>
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
                            <input onChange={handleChange3} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange4} type="checkbox" width='16px' height='16px'/>
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
                            <input onChange={handleChange5} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>DA</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange6} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Nu</p>
                    </div>
                </div>
            </div>
            <div className={priceState ? "final-price" : 'active-final-price'}>
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