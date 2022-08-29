import menu1 from '../../images/header-icons/menu1.svg'
import fileReg from '../../images/header-icons/file-reg.svg'
import users from '../../images/header-icons/users.svg'
import logo from '../../images/logo/Logo.svg'
import './Header.css'
import {useScrollPosition} from '../useScrollPosition'
import {useEffect, useState} from "react";

const Header = ({setShowMenu, setSignIn, setRegister}) => {
    const [isScrolled, setIsScrolled] = useState(false)
    const headerScroll = useScrollPosition()

    useEffect(() => {
        if (headerScroll > 0) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }, [headerScroll])


    return (<div className={isScrolled === true ? 'header-on-scroll' : 'header'}>
            <div className='left'>
                <img onClick={() => {
                    setShowMenu(true)
                }} className='menu-icon' src={menu1} alt=""/>
                <img className='logo' src={logo} alt=""/>
            </div>
            <hr className='fill1'/>
            <h1 className='header-text'>Cu siguranta,impreuna</h1>


            <hr className='fill2'/>
            <div className='right'>
                <div className='right-items'>
                    <div onClick={() => {
                        setSignIn(true)
                    }} className='logare'>
                        <img className='log-in' src={users} alt=""/>
                        <p className='text-right-items'>Logare</p>
                    </div>
                    <div onClick={() => {
                        setRegister(true)
                    }} className='inregistrare'>
                        <img className='register' src={fileReg} alt=""/>
                        <p className='text-right-items'>Inregistrare</p>
                    </div>
                </div>
            </div>
        </div>

    )
}


export default Header