import React, {useState} from 'react';
import './BurgerMenu.css'
import sprite from "../../../images/center/sprite.svg";
import home from '../../../images/icons/burger-icons/home.png'
import delivery from '../../../images/icons/burger-icons/delivery.png'
import checkCircle from '../../../images/icons/burger-icons/check-circle.png'
import fileReg from '../../../images/icons/burger-icons/file-reg.png'
import phone from '../../../images/icons/burger-icons/phone.png'
import question from '../../../images/icons/burger-icons/question.png'
import star from '../../../images/icons/burger-icons/star.png'
import support from '../../../images/icons/burger-icons/support.png'
import users from '../../../images/icons/burger-icons/users.png'
import lang from '../../../images/icons/burger-icons/lang.png'
import message from '../../../images/icons/burger-icons/mail.png'
import location from '../../../images/icons/burger-icons/placeholder.png'
import search from '../../../images/icons/burger-icons/search.png'



const BurgerMenu = ({setShowMenu}) => {
    const [activeLang, setActiveLang] =useState(false)
    return (
        <div className='container-burger'>
            <div className='menu-text-btn'>
                <svg onClick={() => {
                    setShowMenu(false)
                }} className="close-menu">
                    <use href={sprite + '#close'}></use>
                </svg>
                <h2 className="menu-text">Meniu</h2>
            </div>
            <ul className='flex-list'>
                <li className='list-item'><img src={home} alt='home'/>Pagina Principala</li>
                <li className='list-item'><img src={users} alt='users' />Despre Minicode</li>
                <li className='list-item'><img src={checkCircle} alt='checkCircle'/>Produse de asigurare</li>
                <li className='list-item'><img src={delivery} alt="delivery"/> Caz asigurat</li>
                <li className='list-item'><img src={fileReg} alt="fileReg"/>Cariera</li>
                <li className='list-item'><img src={star} alt="star"/>Oferte</li>
                <li className='list-item'><img src={support} alt="support"/>Noutati</li>
                <li className='list-item'><img src={question} alt="question"/>Intrebari</li>
                <li className='list-item'><img src={phone} alt="phone"/>Contacte</li>
            </ul>

            <div className='footer-menu'>
            <div className='menu-lang'>
                <img className='lang-image' src={lang} alt="lang"/>
                <span onClick={() => {
                    setActiveLang(false)
                }} className={activeLang === true? 'lang': 'selected-lang'}>Рус </span>
                <div className='hr-line'></div>
                <span onClick={() => {
                    setActiveLang(true)
                }} className={activeLang === false? 'lang': 'selected-lang'}> Ro</span>
            </div>
            <div className='contacts'>
                <div className='item-contacts'>
                <img src={phone} width='18px' height='18px' alt=""/>
                 <span className='number-contacts'>+ 373 69 845 845</span>
                </div>
                <div className='item-contacts'>
                <img src={message} width='18px' height='18px' alt=""/>
                 <span className='number-contacts'>office@minicode.md</span>
                </div>
                <div className='item-contacts'>
                <img src={location} width='18px' height='18px' alt=""/>
                 <span className='number-contacts'>mun. Chisinau, str Bucuresti, 101</span>
                </div>
                <div className='item-contacts'>
                <img src={search} width='18px' height='18px' alt=""/>
                 <span className='number-contacts'>Harta</span>
                </div>

            </div>
            </div>
        </div>
    );
};

export default BurgerMenu;