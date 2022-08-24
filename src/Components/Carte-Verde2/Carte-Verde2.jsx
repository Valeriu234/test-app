import './Carte-Verde2.css'
import sprite from "../../images/center/sprite.svg";
import livrare from "../../images/icons/image 7.png";


const CarteVerde2 = () => {
    return (
        <div className='carte-verde1'>
            <h3 className='title-slider'>Zona de deplasara</h3>
            <div className="zona">
                <span className='carte-verde-title'>Zona de deplasara</span>
            <div className="checkbox-column-carte-verde">
                <div className='button-check'>
                    <label className="container">
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <p className='text-checkbox'>Ucraina,Belarus</p>
                </div>
                <div className='button-check'>
                    <label className="container">
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <p className='text-checkbox'>Ucraina,Belarus,Federatia Rusa</p>
                </div>
                <div className='button-check'>
                    <label className="container">
                        <input type="checkbox" width='16px' height='16px'/>
                        <span className="checkmark"></span>
                    </label>
                    <p className='text-checkbox'>Tarile membre ale sistemului Carte Verde, Europa</p>
                </div>
            </div>
            </div>
            <div className="buttons-title">
                <span className='input-title'>Valabilitatea politei</span>
            <div className="flex-container">
                <div className="container-radio-button">
                    <input  className='radio-button' name='an' value='2010' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2010">15</label>
                    <label className='text-label' htmlFor="2010">Zile</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2011' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2011">1</label>
                    <label className='text-label' htmlFor="2011">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2012' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2012">2</label>
                    <label className='text-label' htmlFor="2012">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' value='2013' name='an' type="radio"/>
                    <div className="container-line">
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2013">3</label>
                    <label className='text-label' htmlFor="2013">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2014' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2014">4</label>
                    <label className='text-label' htmlFor="2014">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2015' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2015">5</label>
                    <label className='text-label' htmlFor="2015">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2016' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2016">6</label>
                    <label className='text-label' htmlFor="2016">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2017' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2017">7</label>
                    <label className='text-label' htmlFor="2017">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2018' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2018">8</label>
                    <label className='text-label' htmlFor="2018">Luna</label>
                </div>
                <div className="container-radio-button">
                    <input className='radio-button' name='an' value='2019' type="radio"/>
                    <div className='container-line'>
                        <div className='line-between'/>
                    </div>
                    <label className='text-label' htmlFor="2019">9</label>
                    <label className='text-label' htmlFor="2019">Luna</label>
                </div>
            </div>
            </div>
            <div className="final-price">
                <div className="price">
                    <span className='price-number'>153</span>
                    <svg className="dollar">
                        <use href={sprite + "#$"}></use>
                    </svg>
                </div>
                <span className='plus'>+</span>
                <img src={livrare} alt=""/>
                <span className="free-delivery">Livrare gratuita</span>
            </div>
        </div>
    )
}


export default CarteVerde2