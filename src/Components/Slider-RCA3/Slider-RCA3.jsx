import './Slider-RCA3.css'
import sprite from "../../images/center/sprite.svg";

const SliderRCA3 = () => {
    return (
        <div className='slider3-rca'>
            <h3 className='title-slider'>Alege tipul autovehiculului</h3>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Numarul de locuri</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
                <input className='input' placeholder='Selecteaza o optiune'  type="text"/>
            </div>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Numărul persoanelor admise la conducere:</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
                <input className='input' placeholder='Selecteaza o optiune'  type="text"/>
            </div>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Stagiul de conducere a posesorului:</span>
                    <svg className="question">
                        <use href={sprite +"#question"}></use>
                    </svg>
                </div>
                <input className='input' placeholder='Selecteaza o optiune'  type="text"/>
            </div>
        </div>
    )
}

export default SliderRCA3