import "./Center-content.css";
import sprite from "../../images/center/sprite.svg";
import React, {useEffect, useState} from "react";
import Center from "./Center";
import DataFetching from "../Data-fetching";
import Center2 from "./Center2";
import Carousel,{ CarouselItem} from "../Carousel/Carousel";
import Slidercasco2 from "../Sliders-casco2/Slider-casco2";
import SliderCasco4 from "../Slider-casco4/SliderCasco4";
import SliderRca1 from "../Slider-RCA1/Slider-RCA1";
import SliderRca2 from "../Slider-RCA2/Slider-RCA2";
import SliderRCA3 from "../Slider-RCA3/Slider-RCA3";
import SliderRCA4 from "../Slider-RCA4/Slider-RCA4";
import CarteVerde2 from "../Carte-Verde2/Carte-Verde2";
import CarteVerde1 from "../Carte-Verde1/Carte-verde1";
import Modal from "../UI/Modal/Modal";


const CenterContent = ({setRegister, register, setIsMenu , setCountClick, countClick}) => {
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
    const [priceState, setPriceState] =useState(true)
    const [modal, setModal] = useState(false);
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
        changeDisabled(true);
        changeForumValues({ ...formValues,firstInput: false,secondInput: false,thirdInput: false})
        setLastPageFirstInput(false);
        setLastPageSecondInput(false);
        setFransiza(false);
        setFaraFransiza(false);
        setOneOfThree(false);
        setOneOfTwo(false);
        setPriceState(true);
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
                        <Carousel id='1' modal={modal} setModal={setModal} priceState={priceState} setPriceState={setPriceState} oneOfThree={oneOfThree} inputText={inputText} fransiza={fransiza} faraFransiza={faraFransiza} formValues={formValues} changeFormValues={changeForumValues} countClick={countClick} setCountClick={setCountClick} changeDisabled={changeDisabled} disabled={disabled}>
                         <CarouselItem>
                            <DataFetching  changeDisabled={changeDisabled}/>
                         </CarouselItem>
                            <CarouselItem>
                             <Slidercasco2 changeDisabled={changeDisabled} formValues={formValues} changeForumValues={changeForumValues} />
                            </CarouselItem>
                            <CarouselItem>
                                <SliderCasco4 modal={modal} setModal={setModal} priceState={priceState} oneOfTwo={oneOfTwo} setOneOfTwo={setOneOfTwo} oneOfThree={oneOfThree} setOneOfThree={setOneOfThree} inputText={inputText} setInputText={setInputText} fransiza={fransiza} faraFransiza={faraFransiza} setFransiza={setFransiza} setFaraFransiza={setFaraFransiza} changeDisabled={changeDisabled} setLastPageFirstInput={setLastPageFirstInput}  lastPageFirstInput={lastPageFirstInput} setLastPageSecondInput={setLastPageSecondInput} lastPageSecondInput={lastPageSecondInput} setLastPageThirdInput={setLastPageThirdInput} lastPageThirdInput={lastPageThirdInput}   />
                            </CarouselItem>
                        </Carousel>
                    )}
                    {activeItem === items[1].id && (
                        <Carousel>
                            <CarouselItem>
                             <SliderRca1/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderRca2/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderRCA3/>
                            </CarouselItem>
                            <CarouselItem>
                                <SliderRCA4/>
                            </CarouselItem>
                        </Carousel>
                    )}
                    {activeItem === items[0].id && (
                        <Carousel >
                            <CarouselItem>
                                <CarteVerde1/>
                            </CarouselItem>
                        <CarouselItem>
                            <CarteVerde2/>
                        </CarouselItem>
                        </Carousel>
                    )}
                </div>
                <div className="center-section2">
                    {activeItem === items[2].id  && (
                        <Center2 />
                    )}
                    {activeItem === items[1].id && (
                             <Center2 />
                    )}
                </div>
            </div>
            <Modal id='1' modal={modal} setModal={setModal}/>
            <Modal id='2' setFirstModal={setModal} modal={register} setModal={setRegister}/>

        </div>
    );
};

export default CenterContent;