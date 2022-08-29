import sprite from '../../images/center/sprite.svg'
import {useState} from "react";

const Center3 = () => {

    const [isActive1, setIsActive1] = useState(true);

    const handleClick1 = () => {
        setIsActive1(curent => !curent)
    }

    const [isActive2, setIsActive2] = useState(true);

    const handleClick2 = () => {
        setIsActive2(curent => !curent)
    }
    return (<>
            <div className="container-big">
                <div onClick={handleClick2}
                     className={`${isActive2 ? 'menu-description1' : 'menu-description1-active'}`}>
                    <h3 className='title-description'>Obiectul asigurarii</h3>
                    <svg className={`close1 ${isActive2 ? 'close-rotate' : ''}`}>
                        <use href={sprite + '#close'}></use>
                    </svg>
                </div>
                <div className={`description-text-container2 ${isActive2 ? 'hided' : ''}`}>
                    <p className='text-paragraph first-paragraph'>
                        Prin asigurarea „Carte Verde” sunt protejate interesele terțelor persoane pentru pagubele
                        produse vieții, sănătății și bunurilor lor în urma accidentelor rutiere, care au avut loc în
                        afara hotarelor Republicii Moldova (pe teritoriul țărilor membre ale sistemului „Carte Verde”).
                    </p>

                </div>
            </div>
            <div className="container-big">
                <div onClick={handleClick1}
                     className={`${isActive1 ? 'menu-description2' : 'menu-description2-active'}`}>
                    <h3 className='title-description'>Riscuri si obligatiuni</h3>
                    <svg className={`close2 ${isActive1 ? 'close-rotate' : ''}`}>
                        <use href={sprite + '#close'}></use>
                    </svg>
                </div>
                <div className={`description-text-container2 ${isActive1 ? 'hided' : ''}`}>
                    <p className='text-paragraph first-paragraph'>
                        Se acordă despăgubiri pentru prejudiciile provocate prin accidente de vehicule produse în
                        limitele teritoriale de acoperire, în conformitate cu legislaţia în vigoare din statul pe
                        teritoriul căruia s-a produs accidentul.
                    </p><p className='text-paragraph'>
                    Despăgubirile se acordă pentru pagube materiale, cheltuieli de judecată efectuate de către persoana
                    prejudiciată şi vătămări corporale sau deces, inclusiv pentru prejudicii fără caracter patrimonial.
                </p>


                </div>
            </div>
        </>

    )
}

export default Center3