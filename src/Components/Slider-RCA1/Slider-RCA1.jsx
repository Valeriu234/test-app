import './Slider-RCA1.css'
import sprite from '../../images/center/sprite.svg'


function SliderRca1() {
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
                <div className='button-check'>
                    <input className='button-checkbox' type="checkbox"/>
                    <span className='checkbox-text'>Republica Moldova</span>
                </div>
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
                        <div className="checkbox-item">
                        <input className='button-checkbox' type="checkbox"/>
                    </div>
                        <span className='checkbox-text'>Fizica</span>
                    </div>
                    <div className='button-check'>
                        <div className="checkbox-item">
                            <input className='button-checkbox' type="checkbox"/>
                        </div>
                        <span className='checkbox-text'>Juridica</span>
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
                <input className='input' placeholder='Alte localitati'  type="text"/>
            </div>
        </div>
    );
}

export default SliderRca1;