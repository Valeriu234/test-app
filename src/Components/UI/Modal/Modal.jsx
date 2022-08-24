import React, { useState } from "react";
import './Modal.css'
import sprite from '../../../images/center/sprite.svg'
import { useForm } from "react-hook-form";
import { yupResolver} from "@hookform/resolvers/yup";
import * as yup from 'yup'



const schema = yup.object({
 email:yup.string().email().required(),
password:yup.string().min(4).max(15).required(),
confirmPassword:yup.string().oneOf([yup.ref("password"),null]),
termsConditions:yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
})

export default function Modal({setFirstModal, id,modal, setModal}) {

    const {register,handleSubmit,formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const submitForm = (data) => {
        console.log(data)
    }

    const toggleModal = () => {
        console.log('test')
        setModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    return (
        <>

            {id === '1'?modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <h2>Felicitari!! Ati finalizat comanda</h2>

                    </div>
                </div>
            ) : id === '2'? modal && (
                <div className="modal">
                    <div onClick={toggleModal} className="overlay"></div>
                    <div className="modal-content">
                        <div className='all-register-content'>
                        <div className='register-container-header'>
                        <h1 className='register-text'>Inregistreaza-te</h1>
                            <svg onClick={() => {
                                setModal(false)
                            }} className="close-register">
                                <use href={sprite + '#close'}></use>
                            </svg>
                    </div>
                            <div className='have-acc-container'>
                                <span className='question-acc'>Deja ai un cont?</span>
                                <span onClick={() => {
                                    setFirstModal(true)
                                    setModal(false)
                                }} className='log-in-acc'>Logheaza-te</span>
                            </div>
                            <form className='form-container' onSubmit={handleSubmit(submitForm)}>
                            <div className='container-input-form'>
                                <input className='input-register' name='email' placeholder='Email' type="text" {...register('email')}/>
                                <p>{errors.email?.message}</p>
                                <input className='input-register' name='password' placeholder='Parola' type="text" {...register('password')}/>
                                <p>{errors.password?.message}</p>
                                <input className='input-register' name='confirmPassword' placeholder='Confirma parola' type="text" {...register('confirmPassword')}/>
                                <p>{errors.confirmPassword && 'Password should match'}</p>
                            </div>
                            <div className='button-check'>
                                <label className="container">
                                    <input type="checkbox" width='16px' name='termsConditions' height='16px' {...register('termsConditions',{required:true})}/>
                                    <span className="checkmark"></span>
                                </label>
                                <p className='termeni-conditii'>Sunt de acord  cu <span className='termeni-conditii-style'>Termenii și condițiile</span> site-ului</p>
                            </div>
                                <p>{errors.termsConditions?.message}</p>
                            <button type='submit' className='button-inregistrare'>Inregistrare</button>

                            </form>
                        </div>

                    </div>
                </div> ) : ''}
        </>
    );
}