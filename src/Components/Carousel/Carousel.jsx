import './Carousel.css'
import React, {useEffect, useState} from "react";
import sprite from '../../images/center/sprite.svg'
import Modal from "../UI/Modal/Modal";

export const CarouselItem = ({children, width}) => {
    return (
        <div className='carousel-item' style={{width: width}}>
            {children}
        </div>
    );
};

const Carousel = ({
                      id,
                      modal,
                      setModal,
                      priceState,
                      setPriceState,
                      oneOfTwo,
                      oneOfThree,
                      inputText,
                      children,
                      disabled,
                      setCountClick,
                      formValues,
                      changeDisabled
                  }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleModal = () => {
        setModal(!modal);
        changeDisabled(false)
    };

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
        } else {
            changeDisabled(true)
        }
    }

    const verify2 = () => {
        if (oneOfThree === true && oneOfTwo === true && inputText === true) {
            changeDisabled(false)
            console.log('Valeriu')
        } else {
            changeDisabled(true)
            console.log('zINA')
        }
    }


    const verify3 = () => {
        if (priceState === false) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }

    useEffect(() => {
        if (priceState === false) {
            changeDisabled(false)
        } else if (oneOfThree === true && oneOfTwo === true && inputText === true) {
            console.log('zina')
        }
    }, [activeIndex])


    useEffect(() => {
        if (priceState === false) {
            changeDisabled(false)
        }
    }, [priceState, modal])

    return (
        <div className="carousel">
            <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, {width: '100%'});
                })}
            </div>
            <div className="indicators">
                <Modal/>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                        if (id === '1') {
                            changeDisabled(false);
                        }
                    }}>
                    <div className="container-button1">
                        <svg className="arrow-left1">
                            <use href={sprite + "#arrow-left"}></use>
                        </svg>
                        <span className='buttons'>Inapoi</span>
                    </div>
                </button>
                <button className={`${disabled ? 'disabled' : ''}`} onClick={() => {
                    updateIndex(activeIndex + 1);
                    if (id === '1') {
                        changeDisabled(true)
                        if (activeIndex === 0) {
                            verify()
                        } else if (activeIndex === 1) {
                            verify2()
                        } else if (activeIndex === 2 && priceState === false) {
                            toggleModal()
                        } else if (activeIndex === 2) {
                            setPriceState(false)
                        }
                    }
                }}>
                    <div className='container-button2'>
                        <span
                            className="buttons">{id === '1' ? activeIndex === 0 || activeIndex === 1 ? 'Inainte' : activeIndex === 2 && priceState === false ? 'Finalizeaza comanda' : 'Vezi costul' : activeIndex === 2 ? 'Vezi costul' : ''}</span>
                        {id === '1' ? activeIndex !== 2 && (
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