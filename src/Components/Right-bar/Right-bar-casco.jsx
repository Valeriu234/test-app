import styles from './Right-bar.css'
import check from '../../images/icons/burger-icons/check.png'

const RightBarCasco = ({countClick, setCountClick}) => {
    return (
        <div className='right-bar'>
            <div className="first-step first-round">
                <div className="punct">
                </div>
            </div>
            <hr className={countClick > 0 ? 'checked-line' : 'hr'}/>
            <div className={`second-step ${countClick > 0 ? ' checked-round' : ' round'}`}>
                {countClick > 0 && (<img src={check} alt="check"/>
                )}
                {countClick <= 0 && (<>1</>)}
            </div>
            <hr className={countClick >= 2 ? 'checked-line' : 'hr'}/>
            <div className={`second-step ${countClick >= 2 ? ' checked-round' : ' round'}`}>
                {countClick >= 2 && (<img src={check} alt="check"/>
                )}
                {countClick < 2 && (2)}
            </div>
            <hr className={countClick === 3 ? 'checked-line' : 'hr'}/>
            <div className={`second-step ${countClick === 3 ? ' checked-round' : ' round'}`}>
                {countClick === 3 && (<img src={check} alt="check"/>
                )}
                {countClick < 3 && (3)}
            </div>
        </div>
    )
}


export default RightBarCasco