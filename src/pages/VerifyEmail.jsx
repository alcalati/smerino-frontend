import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { token } = useParams();  // Captura el token de la URL
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        // Realiza la solicitud al backend para verificar el token
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        if (error.response) {
          setMessage(error.response.data.message); // Mensaje desde el backend
        } else {
          setMessage('Error al verificar el correo.');
        }
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="container">
      <h2>Verificación de Correo</h2>
      <p>{message}</p>
      <button onClick={() => navigate('/login')}>Iniciar Sesión</button>
    </div>
  );
};

export default VerifyEmail;