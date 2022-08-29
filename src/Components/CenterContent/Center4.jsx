import sprite from '../../images/center/sprite.svg'
import {useState} from "react";

const Center4 = () => {

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
                    <p className='text-paragraph first-paragraph'>Asigurarea RCA oferă protecție pentru eventualele
                        prejudicii cauzate de asigurat terțelor persoane prin accidente de autovehicule pe teritoriul
                        Republicii Moldova, și anume:

                    </p>
                    <p className='text-paragraph'>deces sau vătămări corporale;
                        avarii sau distrugeri ale unor bunuri (inclusiv autovehicule).</p>

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
                        Deces sau vătămări corporale; avarii sau distrugeri ale unor bunuri (inclusiv autovehicule),
                        cauzate de asigurat terțelor persoane prin accidente de autovehicule pe teritoriul Republicii
                        Moldova
                    </p>

                </div>
            </div>
        </>

    )
}

export default Center4