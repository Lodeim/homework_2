

import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'
import { useState } from 'react';
import { Button, TextField } from '@mui/material';

export const ReviewModal = ({          
    isOpen,
    onClose,
    id,
    setReviewsRender,
    setIsModalVisible,

}

) => {

  const [revText, setRevText] = useState('')

  async function handleRevsUpdate (id) {
    const newRevs = await api.getReviews(id)
    const rRevs = [...newRevs]
    setReviewsRender(rRevs)
    setIsModalVisible(false)

}

    const { register, handleSubmit} = useForm();
    const onSubmit = data => api.addReview(data, id).then(handleRevsUpdate(id))
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className='cnRevModal'
        overlayClassName='cnRevModalOverlay'
        
      >
    <form className='cnRevModalForm' onSubmit={handleSubmit(onSubmit)}>
    <TextField 
    label="Отзыв" 
    variant="outlined" 
    placeholder='текст' 
    {...register("text")} 
    onChange={event => setRevText( event.target.value )}
    error={revText === ""}
    helperText={revText === "" ? 'Обязательное поле' : ' '}
    />
      <Button type='submit' variant="contained">Отправить отзыв</Button>
    </form>
        </Modal>
    )
}
