import styles from './Recenzii.css'
import image from '../../images/recenzii/Photo.png'
import image1 from '../../images/recenzii/Photo1.png'
import image2 from '../../images/recenzii/Photo2.png'
import image3 from '../../images/recenzii/Photo3.png'
import sprite from '../../images/center/sprite.svg'
import RecenziiCarousel from "../Recenzii-carousel/Recenzii-carousel";
import SimpleSlider from "../Recenzii-carousel/Recenzii-carousel";


const Recenzii = () => {
    return (<div className='recenzii'>

            <SimpleSlider/>
            {/*<div className='container-recenzii'>*/}
            {/*    <h3 className='heading-recenzii'>Recenziile clientilor</h3>*/}
            {/*<div className='recenzii-slider'>*/}
            {/*    <div className='recenzii-items-part1'>*/}
            {/*        <div className="recenzii-item">*/}
            {/*            <div className='container-profile-image'>*/}
            {/*                <img src={image} alt=""/>*/}
            {/*            </div>*/}
            {/*            <div className="content-recenzii">*/}
            {/*                <h4>Vasile Moraru</h4>*/}
            {/*                <p className='icons'>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                </p>*/}
            {/*                <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost*/}
            {/*                    despagubit in timp.*/}
            {/*                    Personal foarte amabil. Recomand cu incredere!</p>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*        <div className="recenzii-item">*/}
            {/*            <div className="container-profile-image">*/}
            {/*                <img src={image1} alt=""/>*/}
            {/*            </div>*/}
            {/*            <div className="content-recenzii">*/}
            {/*                <h4>Vasile Moraru</h4>*/}
            {/*                <p className='icons'>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                </p>*/}
            {/*                <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost*/}
            {/*                    despagubit in timp.*/}
            {/*                    Personal foarte amabil. Recomand cu incredere!</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    <div className="recenzii-items-part2">*/}
            {/*        <div className='recenzii-item'>*/}
            {/*            <div className="container-profile-image">*/}
            {/*                <img src={image2} alt=""/>*/}
            {/*            </div>*/}
            {/*            <div className="content-recenzii">*/}
            {/*                <h4>Vasile Moraru</h4>*/}
            {/*                <p className='icons'>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                </p>*/}
            {/*                <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost*/}
            {/*                    despagubit in timp.*/}
            {/*                    Personal foarte amabil. Recomand cu incredere!</p>*/}
            {/*            </div>*/}

            {/*        </div>*/}
            {/*        <div className="recenzii-item">*/}
            {/*            <div className="container-profile-image">*/}
            {/*                <img src={image3} alt=""/>*/}

            {/*            </div>*/}
            {/*            <div className="content-recenzii">*/}
            {/*                <h4>Vasile Moraru</h4>*/}
            {/*                <p className='icons'>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                    <svg className="icon">*/}
            {/*                        <use href={sprite + "#star-filled"}></use>*/}
            {/*                    </svg>*/}
            {/*                </p>*/}
            {/*                <p className='description'>Am fost implicat recent intr-un accident rutier. Am fost*/}
            {/*                    despagubit in timp.*/}
            {/*                    Personal foarte amabil. Recomand cu incredere!</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>
        //     <div className='container-dots'>
        //         <div className='small-dot'></div>
        //         <div className='small-dot'></div>
        //         <div className='big-dot'></div>
        //         <div className='small-dot'></div>
        //         <div className='small-dot'></div>
        //     </div>
        // </div>

    )
}


export default Recenzii