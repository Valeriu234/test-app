import style from './Left-bar.css'
import language from '../../images/left-bar/lang.svg'
import phone from '../../images/left-bar/phone.svg'
import messenger from '../../images/left-bar/messengermes.svg'
import whatsapp from '../../images/left-bar/whatsappwhatsapp.svg'
import {useState} from "react";


const LeftBar = () => {
    const [activeLanguage, setActiveLanguage] = useState(false)

    return (
        <div className='left-bar'>
<div className="languages">
    <img src={language} alt=""/>
    <div className='text-languages'>
        <p onClick={() => {
            setActiveLanguage(false)
        }} className={activeLanguage === true ? 'lang-leftbar' : 'selected-lang-leftbar'}>Рус</p>
        <hr className='lang-space'/>
        <p onClick={() => {
            setActiveLanguage(true)
        }} className={activeLanguage === false ? 'lang-leftbar' : 'selected-lang-leftbar'}>Eng</p>
    </div>
</div>
    <hr className='relation-line'/>
    <div className='call'>
        <img src={phone} alt=""/>
        <p className='text-description'>Suna</p>
    </div>
    <hr className='relation-line'/>
   <div className='bottom-actions'>
       <div className="messenger">
           <img src={messenger} alt=""/>
           <p className='text-description'>Messenger</p>
       </div>
       <div className="whatsapp">
           <img src={whatsapp} alt=""/>
           <p className='text-description'>Whatsapp</p>

       </div>
   </div>
        </div>
    )

}

export default LeftBar