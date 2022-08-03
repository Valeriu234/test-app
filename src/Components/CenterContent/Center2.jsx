import sprite from '../../images/center/sprite.svg'
import {useState} from "react";
const Center2 = () => {

    const [isActive1, setIsActive1] = useState(true);

    const handleClick1 = () => {
        setIsActive1(curent => !curent)
    }

    const [ isActive2, setIsActive2 ] = useState(true);

    const handleClick2 = () => {
        setIsActive2(curent => !curent)
    }
    return (<>
            <div className="container-big">
        <div onClick={handleClick2} className='menu-description1'>
    <h3 className='title-description'>Obiectul asigurarii</h3>
            <svg className=" close1">
                <use href={sprite + '#close'}></use>
            </svg>
        </div>
            <div className={`description-text-container2 ${isActive2 ? 'hided' : ''}`}>
               <p className='text-paragraph first-paragraph'>Autovehicule înmatriculate în Republica Moldova, care aparţin persoanelor fizice şi juridice.</p>
                <p className='text-paragraph'>Echipamentul suplimentar, care nu intră în dotarea autovehiculului conform listei de dotări ale uzinei producătoare.</p>
                <p className='text-paragraph'>Conducătorul auto şi pasagerii, pentru cazuri de accidente care pot avea loc în timpul accidentelor rutiere.</p>
            </div>
            </div>
            <div className="container-big">
                <div onClick={handleClick1}  className='menu-description2'>
                    <h3 className='title-description'>Riscuri si obligatiuni</h3>
                    <svg className="close2">
                        <use href={ sprite + '#close'}></use>
                    </svg>
                </div>
                <div className={`description-text-container2 ${isActive1 ? 'hided' : ''}`}>
                    <p  className='text-paragraph first-paragraph'>Se acordă despăgubiri pentru prejudiciile provocate prin accidente de vehicule produse în limitele teritoriale de acoperire, în conformitate cu legislaţia în vigoare din statul pe teritoriul căruia s-a produs accidentul.</p>
                    <p  className='text-paragraph'>Despăgubirile se acordă pentru pagube materiale, cheltuieli de judecată efectuate de către persoana prejudiciată şi vătămări corporale sau deces, inclusiv pentru prejudicii fără caracter patrimonial.</p>

                </div>
            </div>
        </>

    )
}

export default Center2