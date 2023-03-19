import Modal from "react-modal";
import React, { useContext, useState } from "react";
import "./styles.css";
import { UserContext } from "../../context/userContext";
import { AddModal } from "../AddModal";
import { AuthModal } from "../AuthModal";
import { SignupModal } from "../SignupModal";

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
        <button onClick={onOpenAuthModal}>Авторизоваться</button>
        <AuthModal 
        isOpen={isAuthModalVisible} 
        onClose={onCloseAuthModal} 
        className="cnModal"
        overlayClassName="cnModalOverlay"
        />
        <button onClick={onOpenSignupModal}>Зарегистрироваться</button>
        <SignupModal
          isOpen={isSignupModalVisible}
          onClose={onCloseSignupModal}
          className="cnModal"
          overlayClassName="cnModalOverlay"
        />
      </Modal>
    );
  } else {
    return (
      <Modal 
      isOpen={isOpen} 
      onRequestClose={onClose} 
      ariaHideApp={false}
      className="cnModal"
      overlayClassName="cnModalOverlay"
      >
        <p>{`Привет, ${user?.name}!`}</p>
        <button onClick={onOpenAddModal}>Добавить товар</button>
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
