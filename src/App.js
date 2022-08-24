
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
import {useState} from "react";

function App() {

    const [isMenu, setIsMenu] = useState(null)
    const [countClick , setCountClick] = useState(1);
    const [register, setRegister] = useState(false);

  return ( <div className='App'>
        <Header register={register} setRegister={setRegister} />
          <div className='content'>
        <LeftBar />
              <CenterContent register={register} setRegister={setRegister} countClick={countClick} setCountClick={setCountClick} setIsMenu={setIsMenu} />
              {isMenu === null && (
                  <RightBarWhiteContainer/>
              )}
              {isMenu === 'Carte verde' && (
                  <RightBarBook/>
              )}
              {isMenu === 'RCA' && (
                  <RightBarRca/>
              )}
              {isMenu === 'Casco' && (
                  <RightBarCasco/>
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
          <AfterContent />
          <Offers />
          <Recenzii />
          <Footer/>
      </div>

  );
}

export default App;
