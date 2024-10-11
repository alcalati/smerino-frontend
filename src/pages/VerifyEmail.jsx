import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerifyEmail = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/verify-email/${token}`);

        setMessage(response.data.message);
        setTimeout(() => {
          navigate('/email-verified');
        }, 2000);
      } catch (error) {
        console.error('Error al verificar el correo:', error.response ? error.response.data : error.message);
        setMessage('Error al verificar el correo.');
      }
    };

    if (token) {
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
