import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const useForm = (isLogin) => {
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

    // Validación simple
    if (!formData.email.includes('@')) {
      setMessage('Por favor, ingresa un correo electrónico válido');
      setLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setMessage('La contraseña debe tener al menos 6 caracteres');
      setLoading(false);
      return;
    }

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
      setMessage('Error al procesar la solicitud');
    }
    setLoading(false);
  };

  return { formData, loading, message, handleChange, handleSubmit };
};

export default useForm;