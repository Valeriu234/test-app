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

const Carousel = ({ children, disabled,setCountClick,countClick }) => {
    const [activeIndex, setActiveIndex] = useState(0);


    const updateIndex = (newIndex) => {

        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = React.Children.count(children) - 1;
        }
        setCountClick(newIndex+1)
        setActiveIndex(newIndex)
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
                        console.log(activeIndex)
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
                    console.log(countClick)


                }}>
                    <div className='container-button2'>
                        <span className="buttons">Inainte</span>
                        <svg className="arrow-left2">
                            <use href={sprite + "#arrow-right"}></use>
                        </svg>
                    </div>
                </button>
            </div>
        </div>
    )
}


export default Carousel