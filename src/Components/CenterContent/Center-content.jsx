import "./Center-content.css";
import sprite from "../../images/center/sprite.svg";
import React, {useEffect, useState} from "react";
import Center from "./Center";
import DataFetching from "../Data-fetching";
import Center2 from "./Center2";
import Carousel, {CarouselItem} from "../Carousel/Carousel";
import Slidercasco2 from "../Sliders-casco2/Slider-casco2";
import SliderCasco4 from "../Slider-casco4/SliderCasco4";
import SliderRca1 from "../Slider-RCA1/Slider-RCA1";
import SliderRca2 from "../Slider-RCA2/Slider-RCA2";
import SliderRCA3 from "../Slider-RCA3/Slider-RCA3";
import SliderRCA4 from "../Slider-RCA4/Slider-RCA4";
import CarteVerde2 from "../Carte-Verde2/Carte-Verde2";
import CarteVerde1 from "../Carte-Verde1/Carte-verde1";
import Modal from "../UI/Modal/Modal";
import BurgerMenu from "../UI/Burger-Menu/BurgerMenu";
import Center3 from "./Center3";
import Center4 from "./Center4";


const CenterContent = ({signIn, setSignIn, setRegister, register, setIsMenu, setCountClick, countClick}) => {
    const [activeItem, setActiveItem] = useState(null);
    const [disabled, changeDisabled] = useState(true);
    const [formValues, changeForumValues] = useState({
        firstInput: false,
        secondInput: false,
        thirdInput: false,

    })
    const [lastPageFirstInput, setLastPageFirstInput] = useState(false);
    const [lastPageSecondInput, setLastPageSecondInput] = useState(false);
    const [lastPageThirdInput, setLastPageThirdInput] = useState(false);
    const [fransiza, setFransiza] = useState(false)
    const [faraFransiza, setFaraFransiza] = useState(false)
    const [inputText, setInputText] = useState(false)
    const [oneOfThree, setOneOfThree] = useState(false)
    const [oneOfTwo, setOneOfTwo] = useState(false)
    const [priceState, setPriceState] = useState(true)
    const [modal, setModal] = useState(false);
    const [thirdPageRCA, setThirdPageRCA] = useState({
        firstSelect: false,
        secondSelect: false,
        thirdSelect: false
    })
    const [fourthPageRCA, setFourthPageRCA] = useState({
        firstCheckbox: false,
        secondCheckbox: false,
        thirdCheckbox: false,
        fourthCheckbox: false,
        fivethCheckbox: false,
        sixthCheckbox: false,
        firstOneOfTwo: false,
        secondOneOfTwo: false,
        thirdOneOfTwo: false
    })

    const [carteVerde1, setCarteVerde1] = useState(false)
    const [carteVerde2, setCarteVerde2] = useState({
        firstCheckbox: false,
        secondCheckbox: false,
        thirdCheckbox: false,
        radioInput: false,
        oneOfThree: false
    })

    const items = [
        {
            id: 1,
            title: "Carte verde",
        },
        {
            id: 2,
            title: "RCA",
        },
        {
            id: 3,
            title: "Casco",
        },
        {
            id: 4,
            title: "Medicala",
        },
        {
            id: 5,
            title: "Accidente",
        },
        {
            id: 6,
            title: "Bunuri",
        },
        {
            id: 7,
            title: "Locuinte(imobile)",
        },
    ];

    useEffect(() => {
        setActiveItem(null)
        setIsMenu(null)
    }, [modal])

    useEffect(() => {
        changeDisabled(true);
        changeForumValues({...formValues, firstInput: false, secondInput: false, thirdInput: false})
        setLastPageFirstInput(false);
        setLastPageSecondInput(false);
        setLastPageThirdInput(false);
        setFransiza(false);
        setFaraFransiza(false);
        setOneOfThree(false);
        setOneOfTwo(false);
        setInputText(false);
        setPriceState(true);
        setCountClick(0);
        setThirdPageRCA({
            firstSelect: false,
            secondSelect: false,
            thirdSelect: false
        })
        setCarteVerde1(false)
    }, [activeItem])


    return (
        <div className="center-content">
            <div className="top-tabs">
                <h3>Alege tipul de asigurare</h3>
                <ul className="menu-list">
                    {items.map((item, id) => (
                        <Center
                            setRightBar={setIsMenu}
                            key={id}
                            isActive={activeItem}
                            setActive={() => setActiveItem(item.id)}
                            item={item}
                        />
                    ))}

                    <li className="container-for-arrow">
                        Altele
                        <svg className="arrow-right">
                            <use href={sprite + "#arrow-right"}></use>
                        </svg>
                    </li>
                </ul>
            </div>
            <div className="form">
                <div className="center-section1 ">
                    {activeItem === items[2].id && (
                        <Carousel id='1' modal={modal} setModal={setModal} priceState={priceState}
                                  setPriceState={setPriceState} oneOfTwo={oneOfTwo} oneOfThree={oneOfThree}
                                  inputText={inputText}
                                  fransiza={fransiza} faraFransiza={faraFransiza} formValues={formValues}
                                  changeFormValues={changeForumValues} countClick={countClick}
                                  setCountClick={setCountClick} changeDisabled={changeDisabled} disabled={disabled}>
                            <CarouselItem>
                                <DataFetching changeDisabled={changeDisabled}/>
                            </CarouselItem>
                            <CarouselItem>
                                <Slidercasco2 changeDisabled={changeDisabled} formValues={formValues}
                                              changeForumValues={changeForumValues}/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderCasco4 modal={modal} setModal={setModal} priceState={priceState}
                                              oneOfTwo={oneOfTwo} setOneOfTwo={setOneOfTwo} oneOfThree={oneOfThree}
                                              setOneOfThree={setOneOfThree} inputText={inputText}
                                              setInputText={setInputText} fransiza={fransiza}
                                              faraFransiza={faraFransiza} setFransiza={setFransiza}
                                              setFaraFransiza={setFaraFransiza} changeDisabled={changeDisabled}
                                              setLastPageFirstInput={setLastPageFirstInput}
                                              lastPageFirstInput={lastPageFirstInput}
                                              setLastPageSecondInput={setLastPageSecondInput}
                                              lastPageSecondInput={lastPageSecondInput}
                                              setLastPageThirdInput={setLastPageThirdInput}
                                              lastPageThirdInput={lastPageThirdInput}/>
                            </CarouselItem>
                        </Carousel>
                    )}
                    {activeItem === items[1].id && (
                        <Carousel id='2' secondPageRCA={faraFransiza} disabled={disabled}
                                  changeDisabled={changeDisabled} countClick={countClick}
                                  firstInputRCA={lastPageFirstInput} oneOfTwo={oneOfTwo} selectFirstPageRCA={fransiza}
                                  thirdPageRCA={thirdPageRCA} fourthPageRCA={fourthPageRCA}
                                  priceState={priceState} setPriceState={setPriceState}
                                  setModal={setModal} setCountClick={setCountClick} modal={modal}>

                            <CarouselItem>
                                <SliderRca1 lastPageFirstInput={lastPageFirstInput}
                                            setLastPageFirstInput={setLastPageFirstInput}
                                            changeDisabled={changeDisabled}
                                            setLastPageSecondInput={setLastPageSecondInput}
                                            lastPageSecondInput={lastPageSecondInput}
                                            setLastPageThirdInput={setLastPageThirdInput}
                                            lastPageThirdInput={lastPageThirdInput}
                                            fransiza={fransiza}
                                            setFransiza={setFransiza}
                                            setOneOfTwo={setOneOfTwo}
                                            oneOfTwo={oneOfTwo}
                                />


                            </CarouselItem>
                            <CarouselItem>
                                <SliderRca2 setSecondPageRCA={setFaraFransiza} changeDisabled={changeDisabled}/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderRCA3 thirdPageRCA={thirdPageRCA} setThirdPageRCA={setThirdPageRCA}
                                            changeDisabled={changeDisabled}/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderRCA4 fourthPageRCA={fourthPageRCA} setFourthPageRCA={setFourthPageRCA}
                                            changeDisabled={changeDisabled} priceState={priceState}
                                            setPriceState={setPriceState}/>
                            </CarouselItem>
                        </Carousel>
                    )}
                    {activeItem === items[0].id && (
                        <Carousel disabled={disabled} changeDisabled={changeDisabled} priceState={priceState}
                                  setPriceState={setPriceState}
                                  id='3' countClick={countClick}
                                  setCountClick={setCountClick}
                                  carteVerde2={carteVerde2}
                                  carteVerde1={carteVerde1}
                                  setModal={setModal} modal={modal}>
                            <CarouselItem>
                                <CarteVerde1 carteVerde1={carteVerde1} setCarteVerde1={setCarteVerde1}
                                             changeDisabled={changeDisabled}/>
                            </CarouselItem>
                            <CarouselItem>
                                <CarteVerde2 priceState={priceState} carteVerde2={carteVerde2}
                                             setCarteVerde2={setCarteVerde2}
                                             changeDisabled={changeDisabled}/>
                            </CarouselItem>
                        </Carousel>
                    )}
                </div>
                <div className="center-section2">
                    {activeItem === items[2].id && (
                        <Center2/>
                    )}
                    {activeItem === items[1].id && (
                        <Center4/>
                    )}

                    {activeItem === items[0].id && (
                        <Center3/>
                    )}
                </div>
            </div>
            <Modal id='1' modal={modal} setModal={setModal}/>
            <Modal id='2' setFirstModal={setSignIn} modal={register} setModal={setRegister}/>
            <Modal id='3' setFirstModal={setRegister} modal={signIn} setModal={setSignIn}/>

        </div>
    );
};

export default CenterContent;