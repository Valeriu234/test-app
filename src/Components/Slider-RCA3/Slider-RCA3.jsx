import './Slider-RCA3.css'
import sprite from "../../images/center/sprite.svg";
import MySelect from "../UI/MySelect";
import {useEffect} from "react";

const SliderRCA3 = ({thirdPageRCA, setThirdPageRCA, changeDisabled}) => {

    const data = [
        {
            value: 1,
            label: "Pina la 17 locuri, inclusiv al conducatorului"
        },
        {
            value: 2,
            label: "De la 18 pina la 30 locuri, inclusiv al conducatorului"
        }
        ,
        {
            value: 3,
            label: "Cu peste 30 locuri"
        },
        {
            value: 4,
            label: "Troleibuze"
        }

    ];

    const data2 = [
        {
            value: 1,
            label: "Limitat"
        },
        {
            value: 2,
            label: "Nelimitat"
        }

    ];
    const data3 = [
        {
            value: 1,
            label: "Limitat"
        },
        {
            value: 2,
            label: "Nelimitat"
        }

    ];

    useEffect(() => {
        if (thirdPageRCA.firstSelect === true && thirdPageRCA.secondSelect === true && thirdPageRCA.thirdSelect === true) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }, [thirdPageRCA])


    return (
        <div className='slider3-rca'>
            <h3 className='title-slider'>Alege tipul autovehiculului</h3>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Numarul de locuri</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <MySelect id='5' formValues={thirdPageRCA} changeForumValues={setThirdPageRCA} data={data}
                          placeholder='Selecteza o optiune'/>
            </div>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Numărul persoanelor admise la conducere:</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <MySelect id='6' formValues={thirdPageRCA} changeForumValues={setThirdPageRCA} data={data2}
                          placeholder='Selecteaza o optiune'/>
            </div>
            <div className='container-input-rca3'>
                <div className='titlu-icon'>
                    <span className='input-title'>Stagiul de conducere a posesorului:</span>
                    <svg className="question">
                        <use href={sprite + "#question"}></use>
                    </svg>
                </div>
                <MySelect id='7' formValues={thirdPageRCA} changeForumValues={setThirdPageRCA} data={data3}
                          placeholder='Pina la un an'/>
            </div>
        </div>
    )
}

export default SliderRCA3