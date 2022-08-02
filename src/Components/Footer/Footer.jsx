import './Footer.css'
import sprite from '../../images/center/sprite.svg'
import icon from '../../images/icons/footer-icons/Icons.png'
import viber from '../../images/icons/footer-icons/viber.png'
import facebook from '../../images/icons/footer-icons/facebook.png'
import telegram from '../../images/icons/footer-icons/telegram.png'
import instagram from'../../images/icons/footer-icons/instagram.png'
import  '../../Normalize.css'
import logoImage from '../../images/icons/footer-icons/Logo-icon.png'

const Footer = () => {
    return(<div className='background-red'>
            <div className="footer-content">
                <div className='first-section'>
                    <img src={logoImage} alt=""/>
                    <p>Dezvoltarea companiei MINICODE a fost determinată în mare parte de flexibilitatea soluțiilor și ofertelor, adaptivitații față de cerințele pieții și cerințelor clienților</p>
                    <button className='button-comand'>Comanda apel</button>
                </div>
                <div className='second-section section'>
                    <h3 className='footer-heading'>Companie</h3>
                    <ul className='footer-links'>
                        <li className='companie-item'><a href="">Produse de asigurare</a></li>
                        <li className='companie-item'><a href="">Caz asigurat</a></li>
                        <li className='companie-item'><a href="">Noutăți</a></li>
                        <li className='companie-item'><a href="">Carieră</a></li>
                        <li className='companie-item'><a href="">Oferte</a></li>
                        <li className='companie-item'><a href="">Întrebări</a></li>
                    </ul>
                </div>
                <div className='third-section section'>
                    <h3 className='footer-heading'>Contacte</h3>
                    <ul className='footer-links'>
                        <li className='contacte-item'><a href="">+373 69 845 825</a></li>
                        <li className='contacte-item'><a href="">+373 22 824 845</a></li>
                        <li className='strada contacte-item'><a href="">mun. Chișinău, str. București, 101</a></li>
                    </ul>
                </div>
                <div className='fourth-section section'>
                    <h3 className='footer-heading'>Social Media</h3>
                    <div className='call-icons'>
                        <a href=""><img src={icon} alt=""/></a>
                        <a href=""><img src={viber} alt=""/></a>
                    </div>
                    <div className='facebook-telegram'>
                        <a href="#"><img src={facebook} alt=""/></a>
                        <a href="#"><img src={telegram} alt=""/></a>
                    </div>
                    <a href="#"><img src={instagram} alt=""/></a>
                </div>
            </div>
        </div>
    )
}


export default Footer