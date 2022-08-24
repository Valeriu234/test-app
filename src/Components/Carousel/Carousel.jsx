import './Carousel.css'
import React, {useState} from "react";
import sprite from '../../images/center/sprite.svg'

export const CarouselItem = ({ children, width}) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    );
};

const Carousel = ({id, setPriceState, oneOfThree,changeFormValues,oneOfTwo,inputText, children, disabled,setCountClick,
                      countClick,  formValues,changeForumValues, changeDisabled }) => {
    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {

        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        if (id === '1') {
            setCountClick(newIndex + 1)
        }
        setActiveIndex(newIndex)
    }

    const verify = () => {
        if (formValues.firstInput === true && formValues.secondInput === true && formValues.thirdInput === true) {
            changeDisabled(false)
            console.log('am verificat daca sunt toate true')
        }else {
            changeDisabled(true)
        }
    }

    const verify2 = () => {
        if (oneOfThree === true && oneOfTwo === true && inputText === true) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }



    return (
        <div className="carousel">
            <div className="inner" style={{ transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: '100%' });
                })}
            </div>
            <div className="indicators">
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                        if (id === '1') {
                            changeDisabled(false);
                        }
                    }} >
                    <div className="container-button1">
                        <svg className="arrow-left1">
                            <use href={sprite + "#arrow-left"}></use>
                        </svg>
                        <span className='buttons'>Inapoi</span>
                    </div>
                </button>
                <button className={`${disabled? 'disabled' : ''}`}  onClick={() => {
                      updateIndex(activeIndex + 1);
                      if (id === '1') {
                          changeDisabled(true)
                          if (activeIndex === 0) {
                              verify()
                          } else if (activeIndex === 1) {
                              verify2()
                          }
                      }
                }}>
                    <div className='container-button2'>
                        <span onClick={() => {
                            if (id === '1') {
                                if (activeIndex === 2) {
                                    setPriceState(false)
                                    verify2()
                                }
                            }
                        }} className="buttons">{id === '1'?activeIndex !== 2? 'Inainte' : 'Vezi costul' : ''}</span>
                        {  id === '1'?activeIndex !== 2 && (
                            <svg className="arrow-left2">
                            <use href={sprite + "#arrow-right"}></use>
                            </svg>
                            )
                        : ''
                        }
                    </div>
                </button>
            </div>
        </div>
    )
}


export default Carousel