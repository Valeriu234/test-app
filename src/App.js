
import './App.css';
import Header from "./Components/Header/Header";
import LeftBar from "./Components/Left-bar/Left-bar";
import RightBar from "./Components/Right-bar/Right-bar";
import CenterContent from "./Components/CenterContent/Center-content";
import AfterContent from "./Components/After-content/After-content";
import Offers from "./Components/Offers/Offers";
import Recenzii from "./Components/Recenzii/Recenzii";
import Footer from "./Components/Footer/Footer";

function App() {
  return ( <div className='App'>
        <Header />
          <div className='content'>
        <LeftBar />
              <CenterContent />
          <RightBar/>
          </div>
          <AfterContent />
          <Offers />
          <Recenzii />
          <Footer/>
      </div>

  );
}

export default App;
