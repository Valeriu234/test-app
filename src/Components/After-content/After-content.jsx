import './After-content.css'
import InputMask from "react-input-mask";
import {useState} from "react";


const AfterContent = () => {
    const [phone, setPhone] = useState('')

    return (
        <div className='after-content-container'>
            <div className='after-content'>
                <div className="section1">
                    <h3>Ai nevoie de o consultatie</h3>
                    <p>Lasa numele si numarul tau de telefon ,iar noi te vom contacta in cel mai scurt timp posibil</p>
                </div>
                <div className='section2'>
                    <div className='section2-first-section'>
                        <input className='input-after' placeholder='Nume/Prenume' type="text"/>
                        <InputMask
                            className='input-mask'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            mask="(+373\) 99-999-999 "
                            maskChar="_"
                            alwaysShowMask
                        />
                    </div>
                    <div className="section2-second-section">
                        <button className='button-send'>Trimite</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default AfterContent