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
                      countClick,
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
                      changeDisabled,
                      firstInputRCA,
                      selectFirstPageRCA,
                      secondPageRCA,
                      thirdPageRCA,
                      fourthPageRCA,
                      carteVerde2,
                      carteVerde1
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

        setCountClick(newIndex)

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


    const verifyFirstPageRCA = () => {
        if (oneOfTwo === true && firstInputRCA === true && selectFirstPageRCA === true) {
            changeDisabled(false);
            console.log('zina')
        } else {
            changeDisabled(true);
            console.log('valera')
        }
    }
    const verifySecondPageRCA = () => {
        if (secondPageRCA === true) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }

    const verifyThirdPageRCA = () => {
        if (thirdPageRCA.firstSelect === true && thirdPageRCA.secondSelect === true && thirdPageRCA.thirdSelect === true) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }

    const verifyFourthPageRCA = () => {
        if (fourthPageRCA.firstOneOfTwo && fourthPageRCA.secondOneOfTwo && fourthPageRCA.thirdOneOfTwo) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }


    const verifyCarteVerde1 = () => {
        if (carteVerde1.activeObject !== null) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }


    const verifyCarteVerde2 = () => {
        if (carteVerde2.oneOfThree && carteVerde2.radioInput) {
            changeDisabled(false)
        } else {
            changeDisabled(true)
        }
    }

    useEffect(() => {
        console.log(countClick)
    }, [countClick])

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
                            setCountClick(countClick - 1)
                            changeDisabled(false);
                            if (countClick === 3 && priceState === false) {
                                setPriceState(true)
                                updateIndex(activeIndex)
                                setCountClick(countClick - 1)
                            }
                        } else if (id === '2') {
                            if (activeIndex === 1) {
                                setCountClick(countClick - 1)
                                verifyFirstPageRCA()
                            } else if (activeIndex === 2) {
                                verifySecondPageRCA()
                                setCountClick(countClick - 1)
                            } else if (activeIndex === 3) {
                                verifyThirdPageRCA()
                                setCountClick(countClick - 1)
                            }
                            if (countClick === 4 && priceState === false) {
                                setPriceState(true)
                                setCountClick(countClick - 1)
                                setActiveIndex(activeIndex)
                            }
                        } else if (id === '3') {
                            if (activeIndex === 1) {
                                setCountClick(countClick - 1)
                                verifyCarteVerde1()
                            }
                            if (countClick === 2 && priceState === false) {
                                setPriceState(true)
                                setCountClick(countClick - 1)
                                setActiveIndex(activeIndex)
                            }
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
                            toggleModal();
                            setCountClick(3);
                            verify2()
                        } else if (activeIndex === 2) {
                            setPriceState(false)
                            setCountClick(countClick + 1);
                            verify2()
                        }
                    } else if (id === '2') {
                        changeDisabled(true)
                        if (activeIndex === 0) {
                            verifySecondPageRCA()
                            setCountClick(countClick + 1)
                        } else if (activeIndex === 1) {
                            setCountClick(countClick + 1)
                            verifyThirdPageRCA()
                        } else if (activeIndex === 2) {
                            setCountClick(countClick + 1)
                            verifyFourthPageRCA()
                        } else if (activeIndex === 3 && priceState === false) {
                            setModal(true)
                            setCountClick(4)
                        } else if (activeIndex === 3) {
                            setPriceState(false)
                            setCountClick(countClick + 1)
                        }
                    } else if (id === '3') {
                        if (activeIndex === 0) {
                            setCountClick(countClick + 1)
                            verifyCarteVerde2()
                        } else if (activeIndex === 1 && priceState === false) {
                            setCountClick(2)
                            setModal(true)
                        } else if (activeIndex === 1) {
                            setCountClick(countClick + 1)
                            setPriceState(false)
                        }
                    }
                }}>
                    <div className='container-button2'>
                        <span
                            className="buttons">{id === '1' ? activeIndex === 0 || activeIndex === 1 ? 'Inainte' : activeIndex === 2 && priceState === false ? 'Finalizeaza comanda' : 'Vezi costul' : id === '2' ? activeIndex !== 3 ? 'Inainte' : activeIndex === 3 && priceState ? "Vezi costul" : 'Finalizeaza comanda' : id === '3' ? activeIndex !== 1 ? 'Inainte' : activeIndex === 1 && priceState ? 'Vezi costul' : 'Finalizeaza comanda' : ''}</span>
                        {id === '1' ? activeIndex !== 2 && (
                            <svg className="arrow-left2">
                                <use href={sprite + "#arrow-right"}></use>
                            </svg>
                        )
                            : id === '2' ? activeIndex !== 3 && (
                                <svg className="arrow-left2">
                                    <use href={sprite + "#arrow-right"}></use>
                                </svg>
                            ) : id === '3' ? activeIndex !== 1 && (
                                <svg className="arrow-left2">
                                    <use href={sprite + "#arrow-right"}></use>
                                </svg>
                            ) : ''
                        }
                    </div>
                </button>
            </div>
        </div>
    )
}


export default Carousel