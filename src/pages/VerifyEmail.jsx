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
        // Almacenar el mensaje de éxito en el estado
        setMessage(response.data.message);
        // Redirigir después de un pequeño retraso para mostrar el mensaje
        setTimeout(() => {
          navigate('/email-verified');
        }, 2000); // Espera 2 segundos antes de redirigir
      } catch (error) {
        console.error('Error en la solicitud de verificación:', error);
        if (error.response) {
          setMessage(`Error: ${error.response.data.message}`); // Mensaje del backend
        } else {
          setMessage('Error al verificar el correo.'); // Mensaje genérico
        }
      }
    };

    if (token) { // Asegúrate de que el token esté presente antes de hacer la llamada
      verifyEmail();
    }
  }, [token, navigate]);

  return (
    <div className="container">
      <h2>Verificación de Correo</h2>
      <p>{message}</p>
    </div>
  );
};

export default VerifyEmail;
