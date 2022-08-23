import './Slider-casco2.css'
import MySelect from "../UI/MySelect";
import {useEffect, useState} from "react";


const Slidercasco2 = ({changeForumValues, formValues, changeDisabled}) => {

  const  [userID, changeUserID] = useState(null);

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

 const dataRadioBtns = [
     {
         value: 2010,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2011,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2012,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2013,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2014,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2015,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2016,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2017,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2018,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2019,
         name : 'input2',
         type : 'radio'
     }
     ,
     {
         value: 2020,
         name : 'input2',
         type : 'radio'
     },
     {
         value: 2021,
         name : 'input2',
         type : 'radio'
     },
 ]

    useEffect(() => {
        if (userID !== null) {
            changeForumValues({...formValues, thirdInput : true})
        }
    }, [userID])


    const saveID = (index) => {
  changeUserID(index)
    }
    const verify = () => {
        if (formValues.firstInput === true && formValues.secondInput === true && formValues.thirdInput === true) {
            changeDisabled(false)
            console.log('am verificat daca sunt toate true')
        }else {
            changeDisabled(true)
        }
    }

    useEffect(() => {
        verify()
    }, [formValues]);




    return (
        <div className='slider-casco2'>
            <h3 className='title-slider2'>
                Alege marca
            </h3>
            <div className="inputs-slider2">
                <form>
                    <label className='container-input' htmlFor="marca">
                        <span className='input-title'>Marca</span>
                        <MySelect id='1' formValues={formValues} changeForumValues={changeForumValues} placeholder='Introduceti marca'  data={data}/>
                    </label>
                    <label className='container-input' htmlFor="model">
                        <span className='input-title'>Model</span>
                        <MySelect id='2' formValues={formValues} changeForumValues={changeForumValues} placeholder='Introduceti modelul' data={data2}/>
                    </label>
                    <div className="container-radio">
                        <span className='input-title'>
                            Anul procedurii
                        </span>
                        <div className="container-radio-buttons">
                            {
                              dataRadioBtns.map((item,index )=>   <div key={index} className="container-radio-button">
                                    <input className='radio-button' onClick={ () => saveID(index)}  value={'' + item.value} name={item.name} type={item.type}/>
                                    <div className='container-line'>
                                        <div className='line-between'/>
                                    </div>
                                    <label className='text-label' htmlFor={"" + item.value}>{item.value}</label>
                                </div>
                              )}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Slidercasco2