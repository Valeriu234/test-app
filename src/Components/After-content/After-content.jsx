import styles from './After-content.css'


const AfterContent = () => {
    return (
        <div className='after-content-container'>
<div className='after-content'>
    <div className="section1">
        <h3>Ai nevoie de o consultatie</h3>
        <p>Lasa numele si numarul tau de telefon ,iar noi te vom contacta in cel mai scurt timp posibil</p>
    </div>
    <div className='section2'>
        <div className='section2-first-section'>
        <input placeholder='Nume/Prenume' type="text"/>
        <input placeholder='(+373)__-___-___' type="text"/>
        </div>
        <div className="section2-second-section">
<button>Trimite</button>
        </div>
    </div>
</div>
        </div>
    )
}


export default AfterContent