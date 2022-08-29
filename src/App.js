import './App.css';
import Header from "./Components/Header/Header";
import LeftBar from "./Components/Left-bar/Left-bar";
import RightBarCasco from "./Components/Right-bar/Right-bar-casco";
import CenterContent from "./Components/CenterContent/Center-content";
import AfterContent from "./Components/After-content/After-content";
import Offers from "./Components/Offers/Offers";
import Recenzii from "./Components/Recenzii/Recenzii";
import Footer from "./Components/Footer/Footer";
import './assets/fonts/Fonts.css'
import RightBarBook from "./Components/Right-bar/Right-bar-book";
import RightBarRca from "./Components/Right-bar/Right-bar-rca";
import RightBarWhiteContainer from "./Components/Right-bar/Right-bar-white-container";
import React, {useEffect, useState} from "react";
import BurgerMenu from "./Components/UI/Burger-Menu/BurgerMenu";


function App() {

    const [isMenu, setIsMenu] = useState(null)
    const [countClick, setCountClick] = useState(0);
    const [register, setRegister] = useState(false);
    const [signIn, setSignIn] = useState(false)
    const [showMenu, setShowMenu] = useState(false)
    const toggleModal = () => {
        setShowMenu(!showMenu)
    }

    useEffect(() => {
        if (showMenu) {
            document.body.classList.add('active-modal')
        } else {
            document.body.classList.remove('active-modal')
        }
    }, [showMenu])

    return (<div className='App'>
            <div onClick={toggleModal} className={showMenu === true ? "overlay-burger" : ''}></div>
            <BurgerMenu showMenu={showMenu} setShowMenu={setShowMenu}/>

            <Header setShowMenu={setShowMenu} setSignIn={setSignIn} setRegister={setRegister}/>
            <div className='content'>
                <LeftBar/>
                <CenterContent signIn={signIn} setSignIn={setSignIn} register={register} setRegister={setRegister}
                               countClick={countClick} setCountClick={setCountClick} setIsMenu={setIsMenu}/>
                {isMenu === null && (
                    <RightBarWhiteContainer/>
                )}
                {isMenu === 'Carte verde' && (
                    <RightBarBook countClick={countClick} setCountClick={setCountClick}/>
                )}
                {isMenu === 'RCA' && (
                    <RightBarRca countClick={countClick} setCountClick={setCountClick}/>
                )}
                {isMenu === 'Casco' && (
                    <RightBarCasco countClick={countClick} setCountClick={setCountClick}/>
                )}
                {isMenu === 'Medicala' && (
                    <RightBarWhiteContainer/>
                )}
                {isMenu === 'Accidente' && (
                    <RightBarWhiteContainer/>
                )}
                {isMenu === 'Bunuri' && (
                    <RightBarWhiteContainer/>
                )}
                {isMenu === 'Locuinte(imobile)' && (
                    <RightBarWhiteContainer/>
                )}

            </div>
            <AfterContent/>
            <Offers/>
            <Recenzii/>
            <Footer/>
        </div>

    );
}

export default App;
