// src/pages/Register.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
    birthDate: '',
    height: '',
    weight: '',
    phoneNumber: ''
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
    setMessage(''); // Reiniciar el mensaje

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      setLoading(false); // Detener el spinner

      if (response.ok) {
        setMessage('Revisa tu correo electrónico para verificar tu cuenta.'); // Mensaje de éxito
        // Opcionalmente, puedes redirigir después de un tiempo
        setTimeout(() => {
          navigate('/login');
        }, 3000); // Redirigir después de 3 segundos
      } else {
        setMessage('Error en el registro');
      }
    } catch (error) {
      setLoading(false);
      setMessage('Error en la solicitud: ' + error.message);
    }
  };

  return (
    <div className="container">
        <div className="form-container">
            <h2>Registro</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="lastName">Apellido:</label>
                    <input type="text" id="lastName" name="lastName" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="email">Correo:</label>
                    <input type="email" id="email" name="email" onChange={handleChange} required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" id="password" name="password" onChange={handleChange} required />
                </div>
                <button type="submit" className="button" disabled={loading}>
                    {loading ? (
                        // Si estás usando react-loader-spinner, descomenta la siguiente línea
                        <TailSpin height={20} width={20} color="#fff" />
                        // 'Cargando...' // O un texto simple mientras carga
                    ) : (
                        'Registrarse'
                    )}
                </button>
            </form>
            {message && <p className="message">{message}</p>} {/* Mensaje de verificación */}
        </div>
    </div>
  );
};

export default Register;
