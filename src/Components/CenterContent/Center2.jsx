import sprite from '../../images/center/sprite.svg'
const Center2 = () => {

    return (<>
            <div className="container-big">
        <div className='menu-description'>
    <h3 className='title-description'>Obiectul asigurarii</h3>
            <svg className=" close">
                <use href={sprite + '#close'}></use>
            </svg>
        </div>
            <div className='description-text-container'>
               <p className='text-paragraph first-paragraph'>Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.</p>
                <p className='text-paragraph'>Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.</p>
                <p className='text-paragraph'>Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.</p>
            </div>
            </div>
            <div className="container-big">
                <div className='menu-description'>
                    <h3 className='title-description'>Obiectul asigurarii</h3>
                    <svg className=" close">
                        <use href={sprite + '#close'}></use>
                    </svg>
                </div>
                <div className='description-text-container'>
                    <p className='text-paragraph first-paragraph'>Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.</p>
                    <p className='text-paragraph'>Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.</p>
                    <p className='text-paragraph'>Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.</p>
                </div>
            </div>
        </>

    )
}

export default Center2