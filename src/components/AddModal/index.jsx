import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'

export const AddModal = ({          
    isOpen,
    onClose,
}

) => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => api.addProduct(data)
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
      >
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type='checkbox' {...register("available")} />
      <input placeholder="ссылка на изображение" {...register("pictures")} />
      <input placeholder="название (обязательное поле)" {...register("name", { required: true })} />
      <input placeholder="цена (обязательное поле)" type='number' {...register("price", { required: true })} />
      <input placeholder="размер скидки" type='number' {...register("discount")} />
      <input placeholder="доступное количество" type='number' {...register("stock")} />
      <input placeholder="вес" {...register("wight")} />
      <input placeholder="описание (обязательное поле)" {...register("description", { required: true })} />

      {errors && <span>заполните обязательные поля</span>}
    
      
      
      <input type="submit" />
    </form>
        </Modal>
    )
}
