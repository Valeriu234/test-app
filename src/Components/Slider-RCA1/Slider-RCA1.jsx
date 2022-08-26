import './Slider-RCA1.css'
import sprite from '../../images/center/sprite.svg'
import MySelect from "../UI/MySelect";
import {useEffect} from "react";


function SliderRca1({
                        changeDisabled,
                        setLastPageFirstInput,
                        lastPageFirstInput,
                        setLastPageSecondInput,
                        setLastPageThirdInput,
                        lastPageSecondInput,
                        lastPageThirdInput,
                        fransiza,
                        setFransiza,
                        setOneOfTwo,
                        oneOfTwo,
                    }) {

    const data = [
        {
            value: 1,
            label: "Chisinau, Hincesti, Orhei, Straseni, Ialoveni, Anenii Noi, Criuleni"
        },
        {
            value: 2,
            label: "Alte localitati"
        }
    ];

    useEffect(() => {
        if (lastPageThirdInput === true || lastPageSecondInput === true) {
            setOneOfTwo(true)
        } else {
            setOneOfTwo(false)
        }
    }, [lastPageThirdInput, lastPageSecondInput])

    useEffect(() => {
        if (oneOfTwo === true && lastPageFirstInput === true && fransiza === true) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }, [lastPageFirstInput, oneOfTwo, fransiza])


    const handleChange1 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setLastPageFirstInput(true)
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setLastPageFirstInput(false)
        }
    };

    const handleChange2 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setLastPageSecondInput(true)
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setLastPageSecondInput(false)
        }
    };
    const handleChange3 = (event) => {
        if (event.target.checked) {
            console.log('✅ Checkbox is checked');
            setLastPageThirdInput(true)
        } else {
            console.log('⛔️ Checkbox is NOT checked');
            setLastPageThirdInput(false)
        }
    };


    return (
        <div className='slider-rca1'>
            <h3 className='title-slider'>Alege tipul autovehiculului</h3>
            <div className="container-step">
                <div className='titlu-icon'>
                    <span className='input-title'>Autovehiculul este inmatriculat in:</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange1} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Republica Moldova</p>
                    </div>
                </div>
            </div>
            <div className="container-step">
                <div className='titlu-icon'>
                    <span className='input-title'>Posesorul autovehicoluiui este persoană:</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">
                            <input onChange={handleChange2} type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Fizica</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" onChange={handleChange3} width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Juridica</p>
                    </div>
                </div>


            </div>
            <div className='container-input-rca'>
                <div className='titlu-icon'>
                    <span className='titlu-select'>Domiciliul persoanei asigurate</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <div className='dropdown'>
                    <MySelect id='4' changeForumValues={setFransiza} data={data} placeholder='Alte localitati'/>
                </div>
            </div>
        </div>
    );
}

export default SliderRca1;