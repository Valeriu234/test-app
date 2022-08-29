import React from 'react';
import check from "../../images/icons/burger-icons/check.png";

const RightBarBook = ({countClick, setCountClick}) => {
    return (
        <div className='right-bar'>
            <div className="first-step first-round">
                <div className="punct">
                </div>
            </div>
            <hr className={countClick > 0 ? 'checked-line-book' : 'line-book'}/>
            <div className={`second-step ${countClick > 0 ? ' checked-round' : ' round'}`}>
                {countClick > 0 && (<img src={check} alt="check"/>
                )}
                {countClick <= 0 && (<>1</>)}
            </div>
            <hr className={countClick === 2 ? 'checked-line-book' : 'line-book'}/>
            <div className={`second-step ${countClick === 2 ? ' checked-round' : ' round'}`}>
                {countClick === 2 && (<img src={check} alt="check"/>
                )}
                {countClick < 2 && (2)}
            </div>

        </div>
    );
};

export default RightBarBook;