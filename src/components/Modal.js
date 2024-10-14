import React, { useState } from 'react';
import LoginRegisterForm from './LoginRegisterForm'; // Importamos el formulario de login/registro

const Modal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true); // Estado para alternar entre login y registro

  const toggleForm = () => {
    setIsLogin(!isLogin); // Cambia el estado de login a registro o viceversa
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
        <LoginRegisterForm isLogin={isLogin} />
        <button onClick={toggleForm}>
          {isLogin ? '¿No tienes cuenta? Regístrate' : '¿Ya tienes cuenta? Inicia sesión'}
        </button>
      </div>
    </div>
  );
};

export default Modal;
