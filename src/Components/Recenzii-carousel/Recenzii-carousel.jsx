import React, {Component} from "react";
import Slider from "react-slick";
import './Recenzii-carousel.css'
import image from "../../images/recenzii/Photo.png";
import sprite from "../../images/center/sprite.svg";
import image1 from "../../images/recenzii/Photo1.png";
import image2 from "../../images/recenzii/Photo2.png";
import image3 from "../../images/recenzii/Photo3.png";
import africanGirl from '../../images/recenzii/african-girl.png';
import photo5 from '../../images/recenzii/photo5.png'
import photo6 from '../../images/recenzii/Photo6.png'
import photo7 from '../../images/recenzii/Photo7.png'
import photo8 from '../../images/recenzii/Photo8.png'
import photo9 from '../../images/recenzii/Photo9.png'
import photo10 from '../../images/recenzii/Photo10.png'
import photo11 from '../../images/recenzii/Photo11.png'


export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: 5000,
            appendDots: (dots) => <ul>{dots}</ul>,
            customPaging: (i) => <div className="ft-slick__dots--custom"></div>
        };
        return (
            <div className='carousel-recenzii'>
                <h3 className='heading-recenzii'>Recenziile clientilor</h3>
                <Slider {...settings}>
                    <div className='recenzii-slider'>
                        <div className='recenzii-items-part1'>
                            <div className="recenzii-item">
                                <div className='container-profile-image'>
                                    <img src={image} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Vasile Moraru</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost
                                        despagubit in timp.
                                        Personal foarte amabil. Recomand cu incredere!</p>

                                </div>
                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={image1} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Valeria Ivanov</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost
                                        despagubit in timp.
                                        Personal foarte amabil. Recomand cu incredere!</p>
                                </div>
                            </div>
                        </div>
                        <div className="recenzii-items-part2">
                            <div className='recenzii-item'>
                                <div className="container-profile-image">
                                    <img src={image2} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Vasile Moraru</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.</p>
                                </div>

                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={image3} alt=""/>

                                </div>
                                <div className="content-recenzii">
                                    <h4>Vasile Moraru</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                                        et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                                        deserunt nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='recenzii-slider'>
                        <div className='recenzii-items-part1'>
                            <div className="recenzii-item">
                                <div className='container-profile-image'>
                                    <img src={africanGirl} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Cody Fisher</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost
                                        despagubit in timp.
                                        Personal foarte amabil. Recomand cu incredere!</p>

                                </div>
                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={photo6} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Theresa Webb</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>consectetur adipiscing elit duis tristique sollicitudin
                                        nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                                        congue</p>
                                </div>
                            </div>
                        </div>
                        <div className="recenzii-items-part2">
                            <div className='recenzii-item'>
                                <div className="container-profile-image">
                                    <img src={photo5} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Darlene Robertson</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.</p>
                                </div>

                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={photo7} alt=""/>

                                </div>
                                <div className="content-recenzii">
                                    <h4>Albert Flores</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                                        et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                                        deserunt nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='recenzii-slider'>
                        <div className='recenzii-items-part1'>
                            <div className="recenzii-item">
                                <div className='container-profile-image'>
                                    <img src={photo8} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Ronald Richards</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost
                                        despagubit in timp.
                                        Personal foarte amabil. Recomand cu incredere!</p>

                                </div>
                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={photo9} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Annette Black</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>consectetur adipiscing elit duis tristique sollicitudin
                                        nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae
                                        congue</p>
                                </div>
                            </div>
                        </div>
                        <div className="recenzii-items-part2">
                            <div className='recenzii-item'>
                                <div className="container-profile-image">
                                    <img src={photo10} alt=""/>
                                </div>
                                <div className="content-recenzii">
                                    <h4>Floyd Miles</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Amet minim mollit non deserunt ullamco est sit aliqua
                                        dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation
                                        veniam consequat sunt nostrud amet.</p>
                                </div>

                            </div>
                            <div className="recenzii-item">
                                <div className="container-profile-image">
                                    <img src={photo11} alt=""/>

                                </div>
                                <div className="content-recenzii">
                                    <h4>Ralph Edwards</h4>
                                    <p className='icons'>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                        <svg className="icon">
                                            <use href={sprite + "#star-filled"}></use>
                                        </svg>
                                    </p>
                                    <p className='description'>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad
                                        et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
                                        Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id
                                        deserunt nisi.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}