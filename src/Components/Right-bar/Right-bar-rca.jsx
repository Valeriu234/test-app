import React from 'react';
import check from "../../images/icons/burger-icons/check.png";

const RightBarRca = ({countClick, setCountClick}) => {
    return (
        <div className='right-bar'>
            <div className="first-step first-round">
                <div className="punct">
                </div>
            </div>
            <hr className={countClick > 0 ? 'checked-line-rca' : 'relation-line rca'}/>
            <div className={`second-step ${countClick > 0 ? ' checked-round' : ' round'}`}>
                {countClick > 0 && (<img src={check} alt="check"/>
                )}
                {countClick <= 0 && (<>1</>)}
            </div>
            <hr className={countClick >= 2 ? 'checked-line-rca' : 'relation-line rca'}/>
            <div className={`second-step ${countClick >= 2 ? ' checked-round' : ' round'}`}>
                {countClick >= 2 && (<img src={check} alt="check"/>
                )}
                {countClick < 2 && (2)}
            </div>
            <hr className={countClick >= 3 ? 'checked-line-rca' : 'relation-line rca'}/>
            <div className={`second-step ${countClick >= 3 ? ' checked-round' : ' round'}`}>
                {countClick >= 3 && (<img src={check} alt="check"/>
                )}
                {countClick < 3 && (3)}
            </div>
            <hr className={countClick === 4 ? 'checked-line-rca' : 'relation-line rca'}/>
            <div className={`second-step ${countClick === 4 ? ' checked-round' : ' round'}`}>
                {countClick === 4 && (<img src={check} alt="check"/>
                )}
                {countClick < 4 && (4)}
            </div>
        </div>
    );
};

export default RightBarRca;