import sprite from '../../images/center/sprite.svg'
import {useState} from "react";

const Center2 = () => {

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
                    <div className='container-paragraphs'>
                        <p className='text-paragraph first-paragraph'>Autovehicule înmatriculate în Republica Moldova,
                            care
                            aparţin persoanelor fizice şi juridice.</p>
                        <p className='text-paragraph'>Echipamentul suplimentar, care nu intră în dotarea autovehiculului
                            conform listei de dotări ale uzinei producătoare.</p>
                        <p className='text-paragraph'>Conducătorul auto şi pasagerii, pentru cazuri de accidente care
                            pot
                            avea loc în timpul accidentelor rutiere.</p>
                    </div>
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

                    <div className='container-paragraphs'>
                        <p className='text-paragraph first-paragraph'>
                            "DAUNE" - prejudiciile materiale cauzate Asiguratului prin deteriorarea sau distrugerea
                            autovehiculului şi a echipamentului suplimentar ca urmare a:
                        </p>

                        <p className='text-paragraph'>
                            a. tamponării, lovirii sau ciocnirii cu un alt autovehicul, obiect; trecerii peste orice fel
                            de
                            obiecte statice sau în mişcare; căderii; căderii pe autovehicul a unor obiecte străine;
                            derapării; răsturnării; alunecării;
                        </p>
                        <p className='text-paragraph'>
                            b. incendiului, descărcării electrice, exploziei, ploii torenţiale, grindinei, inundaţiei,
                            uraganului, cutremurului de pămînt, surpărilor, alunecărilor de teren, căderilor abundente
                            de
                            zăpadă, avalanşelor, inclusiv acţiunea directă sau indirectă a acestora;
                        </p>
                        <p className='text-paragraph'>
                            - „FURT” – furtul, jaful, tîlhăria, răpirea autovehicului, a părţilor componente sau
                            pieselor
                            acestuia; orice daune cauzate ca urmare a furtului, jafului, tîlhăriei, răpirei sau
                            tentativei
                            de furt, jaf, tîlharie, răpire a autovehicului, a părţilor lui componente şi a pieselor,
                            echipamentului primit în asigurare, precum şi a echipamentului suplimentar şi accesoriilor
                            dacă
                            acestea sunt asigurate conform contractului de asigurare.
                        </p>
                        <p className='text-paragraph'>
                            -„ACCIDENT” – cauzarea leziunilor corporale sau decesul conducătorului auto/pasagerilor ca
                            rezultat al unui accident rutier.
                        </p>
                        <p className='text-paragraph'>
                            "AUTOCASCO" - pachetul complet de riscuri, compus din grupurile de risc "DAUNĂ" şi "FURT",
                            care
                            poate include suplimentar riscul "ACCIDENT".
                        </p>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Center2