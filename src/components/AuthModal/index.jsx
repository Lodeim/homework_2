import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'

export const AuthModal = ({          
    isOpen,
    onClose,
    className,
    overlayClassName,
}

) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => api.authUser(data).then(api.getUserInfo).then(api.getProductList)

    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className={className}
        overlayClassName={overlayClassName}
      >

    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="почта" type='email'{...register("email", { required: true })} />
      <input placeholder="пароль" type='password'{...register("password", { required: true })} />
      {errors.email && <span>почта обязательна</span>}
      {errors.password && <span>пароль обязателен</span>}

    
      
      
      <input type="submit" />
    </form>
        </Modal>
    )
}
