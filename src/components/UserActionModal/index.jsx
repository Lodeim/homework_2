import Modal from "react-modal";
import React, { useContext, useState } from "react";
import "./styles.css";
import { UserContext } from "../../context/userContext";
import { AddModal } from "../AddModal";
import { AuthModal } from "../AuthModal";
import { SignupModal } from "../SignupModal";
import { Button } from "@mui/material";

export const UserActionModal = ({ isOpen, onClose }) => {
  const { user } = useContext(UserContext);
  const [isAddModalVisible, setIsAddModalVisible] = useState(false);
  const onCloseAddModal = (e) => {
    e.stopPropagation();
    setIsAddModalVisible(false);
  };
  const onOpenAddModal = () => {
    setIsAddModalVisible(true);
  };
  const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
  const onCloseAuthModal = (e) => {
    e.stopPropagation();
    setIsAuthModalVisible(false);
  };
  const onOpenAuthModal = () => {
    setIsAuthModalVisible(true);
  };
  const [isSignupModalVisible, setIsSignupModalVisible] = useState(false);
  const onCloseSignupModal = (e) => {
    e.stopPropagation();
    setIsSignupModalVisible(false);
  };
  const onOpenSignupModal = () => {
    setIsSignupModalVisible(true);
  };
  if (!document.cookie) {
    return (
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      ariaHideApp={false}
      className="cnModal"
      overlayClassName="cnModalOverlay"
      >
        <Button onClick={onOpenAuthModal} variant="contained">Авторизоваться</Button>
        <AuthModal 
        isOpen={isAuthModalVisible} 
        onClose={onCloseAuthModal} 
        />
        <Button onClick={onOpenSignupModal} variant="contained">Зарегистрироваться</Button>
        <SignupModal
          isOpen={isSignupModalVisible}
          onClose={onCloseSignupModal}

        />
      </Modal>
    );
  } else if (user?.name) {
    return (
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      ariaHideApp={false}
      className="cnModal"
      overlayClassName="cnModalOverlay"
      >
        <p>{`Привет, ${user?.name}!`}</p>
        <Button onClick={onOpenAddModal} variant="contained">Добавить товар</Button>

        <AddModal
          user={user}
          isOpen={isAddModalVisible}
          onClose={onCloseAddModal}
          className="cnModal"
          overlayClassName="cnModalOverlay"
        />
      </Modal>
    );
  }
};
