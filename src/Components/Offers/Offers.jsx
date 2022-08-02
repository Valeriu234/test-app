import styles from './Offers.css'
import arrowRight from '../../images/center/arrow-right.svg'
import sprite from "../../images/center/sprite.svg"
import image1 from '../../images/Offers/IMG.jpg'
import image2 from '../../images/Offers/IMG2.jpg'
import image3 from '../../images/Offers/IMG3.jpg'
const Offers = () => {
   return (
       <div className="container-for-offers-container">
<div className="offers-container">
<div className="container-headers-text">

        <h3 className='title-offers'>Oferte</h3>

    <div className='container-p'>
        <p className='see-all-offers'>Vezi toate ofertele</p>
        <svg className="arrow-right-offers">
            <use href={sprite + '#arrow-right'}></use>
        </svg>
    </div>
</div>
    <div className='components'>
        <div className='component1'>
            <div className="container-for-image">
            <img src={image1} alt=""/>
            </div>
            <h3>Asigurati locuinta atunci cind pleci in vacanta!</h3>
            <p>Asigurati locuinta atunci cind pleci in vacanta</p>
            <div className='button-more'>
                <h4 className='see-more'>Vezi mai mult</h4>
                <svg className="arrow-right-offers">
                    <use href={sprite + '#arrow-right'}></use>
                </svg>
            </div>
        </div>
        <div className='component2'>
            <div className='container-for-image'>
            <img src={image2} alt=""/>
            </div>
            <h3>Asigurati locuinta atunci cind pleci in vacanta!</h3>
            <p>Asigurati locuinta atunci cind pleci in vacanta</p>
            <div className='button-more'>
                <h4 className='see-more'>Vezi mai mult</h4>
                <svg className="arrow-right-offers">
                    <use href={sprite + '#arrow-right'}></use>
                </svg>
            </div>
        </div>
        <div className='component3'>
            <div className="container-for-image">
            <img src={image3} alt=""/>
            </div>
            <h3>Asigurati locuinta atunci cind pleci in vacanta!</h3>
            <p>Asigurati locuinta atunci cind pleci in vacanta</p>
            <div className='button-more'>
                <h4 className='see-more'>Vezi mai mult</h4>
                <svg className="arrow-right-offers">
                    <use href={sprite + '#arrow-right'}></use>
                </svg>
            </div>
        </div>
    </div>
</div>

       </div>
   )
}


export default Offers