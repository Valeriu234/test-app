import style from './Left-bar.css'
import language from '../../images/left-bar/lang.svg'
import phone from '../../images/left-bar/phone.svg'
import messenger from '../../images/left-bar/messengermes.svg'
import whatsapp from '../../images/left-bar/whatsappwhatsapp.svg'


const LeftBar = () => {
    return (
        <div className='left-bar'>
<div className="languages">
    <img src={language} alt=""/>
    <div className='text-languages'>
        <p className='text-description'>Рус</p>
        <hr className='lang-space'/>
        <p className='text-description'>Eng</p>
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