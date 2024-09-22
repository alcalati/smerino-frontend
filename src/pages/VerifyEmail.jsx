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
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify/${token}`);
        setMessage(response.data.message);
      } catch (error) {
        // Manejo de error mejorado
        console.error('Error en la solicitud de verificación:', error);
        if (error.response) {
          setMessage(`Error: ${error.response.data.message}`); // Mensaje del backend
        } else {
          setMessage('Error al verificar el correo.'); // Mensaje genérico
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