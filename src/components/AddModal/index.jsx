import Modal from 'react-modal';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'
import { Button, Checkbox, TextField } from '@mui/material';

export const AddModal = ({          
    isOpen,
    onClose,
}

) => {
  // eslint-disable-next-line
  const [available, setAvailable] = useState(true)
  // eslint-disable-next-line
  const [pictures, setPictures] = useState('')
  const [productName, setProductName] = useState('')
  const [price, setPrice] = useState('')
  // eslint-disable-next-line
  const [discount, setDiscount] = useState('')
  // eslint-disable-next-line
  const [stock, setStock] = useState('')
  // eslint-disable-next-line
  const [weigth, setWeight] = useState('')
  const [description, setDescription] = useState('')


    const { register, handleSubmit} = useForm();
    const onSubmit = data => api.addProduct(data)
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className="cnAddModal"
        overlayClassName="cnAddModalOverlay"
      >
    <form className="cnAddModalForm" onSubmit={handleSubmit(onSubmit)}>
      <Checkbox     
      label="Доступно" 
{...register("available")}
    onChange={event => setAvailable( event.target.value )}/>
      <TextField
    label="Изображение" 
    variant="outlined" 
    placeholder="ссылка на изображение" {...register("pictures")}
    onChange={event => setPictures( event.target.value )}
  />
    <TextField 
    label="Название" 
    variant="outlined" 
    placeholder="Название" 
    {...register("name", { required: true })}
    onChange={event => setProductName( event.target.value )}
    error={productName === ""}
    helperText={productName === "" ? 'Обязательное поле' : ' '}
  />    
    <TextField 
    label="Цена" 
    variant="outlined" 
    placeholder="Цена" 
    type='number'
    {...register("price", { required: true })}
    onChange={event => setPrice( event.target.value )}
    error={price === ""}
    helperText={price === "" ? 'Обязательное поле' : ' '}
  />
      <TextField 
    label="Размер скидки" 
    variant="outlined" 
    placeholder="размер скидки" 
    type='number' 
    {...register("discount")}
    onChange={event => setDiscount( event.target.value )}
  />
        <TextField 
    label="Доступное количество" 
    variant="outlined" 
    placeholder="доступное количество" 
    type='number' 
    {...register("stock")}
    onChange={event => setStock( event.target.value )}
  />
         <TextField 
    label="Вес" 
    variant="outlined" 
    placeholder="вес" 
    type='number'
    {...register("wight")}
    onChange={event => setWeight( event.target.value )}
  />
    <TextField 
    label="Описание" 
    variant="outlined" 
    placeholder="Описание" 
    {...register("description", { required: true })}
    onChange={event => setDescription( event.target.value )}
    error={description === ""}
    helperText={description === "" ? 'Обязательное поле' : ' '}
  />  

<Button type='submit' variant="contained">Добавить</Button>
    </form>
        </Modal>
    )
}
