import './Slider-casco2.css'
import MySelect from "../UI/MySelect";


const Slidercasco2 = () => {

    const data = [
        {
            value: 1,
            label: "ALFA ROMEO"
        },
        {
            value: 2,
            label: "BENTLEY"
        },
        {
            value: 3,
            label: "BMW"
        },
        {
            value: 4,
            label: "CHEVROLET"
        }
    ]
    const data2 = [
        {
            value: 1,
            label: "CIVIC"
        },
        {
            value: 2,
            label: "E 34"
        },
        {
            value: 3,
            label: "CAMARO"
        },
        {
            value: 4,
            label: "W 220"
        }
    ];



    return (
        <div className='slider-casco2'>
            <h3 className='title-slider2'>
                Alege marca
            </h3>
            <div className="inputs-slider2">
                <form>
                    <label className='container-input' htmlFor="marca">
                        <span className='input-title'>Marca</span>
                        <MySelect placeholder='Introduceti marca' data={data}/>
                    </label>
                    <label className='container-input' htmlFor="model">
                        <span className='input-title'>Model</span>
                        <MySelect placeholder='Introduceti modelul' data={data2}/>
                    </label>
                    <div className="container-radio">
                        <span className='input-title'>
                            Anul procedurii
                        </span>
                        <div className="container-radio-buttons">
                            <div className="container-radio-button">
                                <input  className='radio-button' value='2010' name='input2' type="radio"/>
                                <div className='container-line'>
                                <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2010">2010</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2011' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2011">2011</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2012' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2012">2012</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2013' name='input2' type="radio"/>
                                <div className="container-line">
                                <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2013">2013</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2014' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2014">2014</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2014' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2015">2015</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2016' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2016">2016</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2017' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2017">2017</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2018' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2018">2018</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button' value='2019' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2019">2019</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button'  value='2020' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2020">2020</label>
                            </div>
                            <div className="container-radio-button">
                                <input className='radio-button'   value='2021' name='input2' type="radio"/>
                                <div className='container-line'>
                                    <div className='line-between'/>
                                </div>
                                <label className='text-label' htmlFor="2021">2021</label>
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Slidercasco2