import menu1 from '../../images/header-icons/menu1.svg'
import fileReg from '../../images/header-icons/file-reg.svg'
import users from  '../../images/header-icons/users.svg'
import logo from '../../images/logo/Logo.svg'
import styles from './Header.css'

const Header = () => {
return (<div className='header'>
        <div className='left'>
    <img className='menu-icon' src={menu1} alt=""/>
        <img className='logo' src={logo} alt=""/>
        <hr className='fill1'/>
        </div>
        
        <h1 className='header-text'>Cu siguranta,impreuna</h1>

        <div className='right'>
            <hr className='fill2'/>
            <div className='right-items'>
        <div className='logare'>
            <img src={users} alt=""/>
            <p className='text-right-items'>Logare</p>
        </div>
            <div className='inregistrare'>
                <img src={fileReg} alt=""/>
                <p className='text-right-items'>Inregistrare</p>
            </div>
            </div>
        </div>
    </div>

)
}



export default Header