import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmailVerified = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/login');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="container">
      <h2>Correo Verificado</h2>
      <p>Tu correo ha sido verificado exitosamente. Serás redirigido al inicio de sesión en breve.</p>
    </div>
  );
};

export default EmailVerified;
