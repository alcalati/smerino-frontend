// src/pages/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
// Si estás usando react-loader-spinner, descomenta la siguiente línea
import { TailSpin } from 'react-loader-spinner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Estado de carga
  const navigate = useNavigate(); // Asegúrate de importar useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(''); // Reiniciar el error

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password });
      setLoading(false); // Detener el spinner

      // Guardar el token en el almacenamiento local
      localStorage.setItem('token', res.data.token); // Ajusta según el formato de respuesta de tu API

      // Redirigir a la página de perfil
      navigate('/profile'); // Cambia esto por la ruta que desees
    } catch (error) {
      setLoading(false);
      setError('Error al iniciar sesión');
    }
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Correo:</label>
            <input type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="input-group">
            <label htmlFor="password">Contraseña:</label>
            <input type="password" id="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button type="submit" className="button" disabled={loading}>
            {loading ? (
              // Si estás usando react-loader-spinner, descomenta la siguiente línea
              <TailSpin height={20} width={20} color="#fff" />
            ) : (
              'Iniciar Sesión'
            )}
          </button>
        </form>
        {error && <p className="error">{error}</p>} {/* Mostrar error si existe */}
      </div>
    </div>
  );
};

export default Login;
