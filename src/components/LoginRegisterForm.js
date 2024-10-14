import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import useForm from '../hooks/useForm';

const LoginRegisterForm = ({ isLogin }) => {
  const { formData, loading, message, handleChange, handleSubmit } = useForm(isLogin);

  return (
    <form onSubmit={handleSubmit}>
      {!isLogin && (
        <>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="lastName">Apellido:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleChange}
              value={formData.lastName}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="birthDate">Fecha de nacimiento:</label>
            <input
              type="date"
              id="birthDate"
              name="birthDate"
              onChange={handleChange}
              value={formData.birthDate}
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="height">Altura:</label>
            <input
              type="number"
              id="height"
              name="height"
              onChange={handleChange}
              value={formData.height}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="weight">Peso:</label>
            <input
              type="number"
              id="weight"
              name="weight"
              onChange={handleChange}
              value={formData.weight}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="phoneNumber">Número de teléfono:</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              onChange={handleChange}
              value={formData.phoneNumber}
              disabled={loading}
            />
          </div>
        </>
      )}
      <div>
        <label htmlFor="email">Correo:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
          value={formData.email}
          required
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
          value={formData.password}
          required
          disabled={loading}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? <TailSpin height={20} width={20} color="#fff" /> : isLogin ? 'Iniciar Sesión' : 'Registrarse'}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
};

export default LoginRegisterForm;