import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'

export const SignupModal = ({          
    isOpen,
    onClose,
}

) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => api.signupUser(data).then(res => console.log(res))

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
      >

    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="почта" type='email' {...register("email", { required: true })} />
      <input placeholder="группа" value='group-10' {...register("group", { required: true })} />
      <input placeholder="пароль" type='password' {...register("password", { required: true })} />
      {errors.email && <span>почта обязательна</span>}
      {errors.email && <span>укажите группу</span>}
      {errors.password && <span>пароль обязателен</span>}

    
      
      
      <input type="submit" />
    </form>
        </Modal>
    )
}
