import './Slider-RCA1.css'
import sprite from '../../images/center/sprite.svg'
import Select from "react-select";
import {useState} from "react";


function SliderRca1() {

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

const selectStyles = {
    control: (styles,state) =>
        ({...styles, backgroundColor: 'white',
        '&:hover': {
            borderColor: 'red'
        },
        borderColor: state.isFocused ? 'red' : '#E7E5E4',
        boxShadow: 'none',
        cursor: 'pointer',
        padding: '0 15px',
        height: '45px'}),
    dropdownIndicator: (styles) => ({
    ...styles, display: 'none'
    }),
    indicatorSeparator: (styles) => ({
        ...styles, display: 'none'
    }),
    menuList: (styles) => ({
        ...styles, height: '100px',
        display: 'flex',
        gap: '10px',
        flexDirection: 'column',
        padding: '0',
    }),
    option: (styles) => ({
      ...styles, height: '45px'
    })

}

    return (
        <div className='slider-rca1'>
            <h3 className='title-slider'>Alege tipul autovehiculului</h3>
            <div className="container-step">
                <div className='titlu-icon'>
            <span className='input-title'>Autovehiculul este inmatriculat in:</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
            <div className="checkbox">
                <label className="container">Republica Moldova
                    <input type="checkbox" width='16px' height='16px'/>
                    <span className="checkmark"></span>
                </label>
            </div>
            </div>
            <div className="container-step">
                <div className='titlu-icon'>
                <span className='input-title'>Posesorul autovehicoluiui este persoană:</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
                <div className="checkbox">
                    <div className='button-check'>
                        <label className="container">Ucraina, Belarus
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                    <div className='button-check'>
                        <label className="container">Ucraina, Belarus
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                    </div>
                </div>


            </div>
            <div className='container-input-rca'>
                <div className='titlu-icon'>
                <span className='input-title'>Domiciliul persoanei asigurate</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
               <div className='dropdown'>
                <Select classNamePrefix='custom-select'  options={ data } defaultValue={data[1]} styles={selectStyles} />
               </div>
            </div>
        </div>
    );
}

export default SliderRca1;