import Modal from 'react-modal';
import React from 'react';
import { useForm } from "react-hook-form";
import api from '../../utils/api';

import './styles.css'
import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export const SignupModal = ({          
    isOpen,
    onClose,
}

) => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => api.signupUser(data).then(res => console.log(res))
    const [emailNew, setEmailNew] = useState('')
    const [groupNew, setGroupNew] = useState('group-10')
    const [passwordNew, setPasswordNew] = useState('')
    return (
        <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        ariaHideApp={false}
        className="cnSignupModal"
        overlayClassName="cnSignupModalOverlay"
      >

    <form className="cnSignupModalForm" onSubmit={handleSubmit(onSubmit)}>

    <TextField 
    id="outlined-basic" 
    label="Email" 
    variant="outlined" 
    placeholder="почта" 
    type='email'
    {...register("email", { required: true })}
    onChange={event => setEmailNew( event.target.value )}
    error={emailNew === ""}
    helperText={emailNew === "" ? 'Обязательное поле' : ' '}
  />
      <TextField 
    id="outlined-basic"  
    label="Group" 
    variant="outlined" 
    placeholder="группа" value='group-10' {...register("group", { required: true })}
    onChange={event => setGroupNew( event.target.value )}
    error={groupNew === ""}
    helperText={groupNew === "" ? 'Обязательное поле' : ' '}
    />
      <TextField 
    id="outlined-basic"  
    label="Password" 
    variant="outlined" 
    placeholder="пароль" 
    type='password'{...register("password", { required: true })}
    onChange={event => setPasswordNew( event.target.value )}
    error={passwordNew === ""}
    helperText={passwordNew === "" ? 'Обязательное поле' : ' '}
    />

      <Button type='submit' variant="contained">Зарегистрироваться</Button>
    </form>
        </Modal>
    )
}
