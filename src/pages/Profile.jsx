import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/auth/profile`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (err) {
        setError('Error al cargar el perfil');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  if (loading) return <div>Cargando...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="container">
      <h2>Perfil</h2>
      {user ? (
        <div>
          <p>Nombre: {user.name}</p>
          <p>Apellido: {user.lastName}</p>
          <p>Correo: {user.email}</p>
        </div>
      ) : (
        <p>No se encontró información del perfil.</p>
      )}
    </div>
  );
};

export default Profile;
