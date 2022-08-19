import './Slider-RCA1.css'
import sprite from '../../images/center/sprite.svg'
import MySelect from "../UI/MySelect";


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
                            <input type="checkbox" width='16px' height='16px'/>
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
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Ucraina, Belarus</p>
                    </div>
                    <div className='button-check'>
                        <label className="container">
                            <input type="checkbox" width='16px' height='16px'/>
                            <span className="checkmark"></span>
                        </label>
                        <p className='text-checkbox'>Ucraina, Belarus</p>
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
                   <MySelect data={data} placeholder='Alte localitati'/>
                </div>
            </div>
        </div>
    );
}

export default SliderRca1;