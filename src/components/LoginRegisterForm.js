import React, { useState } from 'react';
import axios from 'axios';
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const LoginRegisterForm = ({ isLogin }) => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    height: '',
    weight: '',
    phoneNumber: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const url = isLogin
        ? `${process.env.REACT_APP_API_URL}/auth/login`
        : `${process.env.REACT_APP_API_URL}/auth/register`;

      const response = await axios.post(url, formData);

      if (isLogin) {
        localStorage.setItem('token', response.data.token);
        navigate('/profile');
      } else {
        setMessage('Por favor, revisa tu correo electrónico para verificar tu cuenta.');
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }
    } catch (error) {
      setLoading(false);
      setMessage('Error al procesar la solicitud');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="lastName">Apellido:</label>
            <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
          </div>
        </>
      )}
      <div>
        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input type="password" id="password" name="password" onChange={handleChange} required />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? <TailSpin height={20} width={20} color="#fff" /> : (isLogin ? 'Iniciar Sesión' : 'Registrarse')}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginRegisterForm;
