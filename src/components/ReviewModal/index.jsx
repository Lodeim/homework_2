

import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'

export const ReviewModal = ({          
    isOpen,
    onClose,
    id,
    setReviewsRender,
}

) => {


  async function handleRevsUpdate (id) {
    const newRevs = await api.getReviews(id)
    const rRevs = [...newRevs]
    setReviewsRender(rRevs)
}

    const { register, handleSubmit} = useForm();
    const onSubmit = data => api.addReview(data, id).then(handleRevsUpdate(id))
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
      >
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder='напишите ваш отзыв' {...register("text")} />
      <input type="submit"/>
    </form>
        </Modal>
    )
}
