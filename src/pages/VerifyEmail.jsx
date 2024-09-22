import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { token } = useParams();  // Captura el token de la URL
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [hasVerified, setHasVerified] = useState(false);

useEffect(() => {
  const verifyEmail = async () => {
    if (hasVerified) return; // Evitar múltiples verificaciones

    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify/${token}`);
      setMessage(response.data.message);
      setHasVerified(true); // Marca como verificado
    } catch (error) {
      console.error('Error en la solicitud de verificación:', error);
      if (error.response) {
        setMessage(`Error: ${error.response.data.message}`);
      } else {
        setMessage('Error al verificar el correo.');
      }
    }
  };

  if (token) {
    verifyEmail();
  }
}, [token, hasVerified]); // Agrega hasVerified como dependencia


  return (
    <div className="container">
      <h2>Verificando Correo...</h2>
    </div>
  );
};

export default VerifyEmail;