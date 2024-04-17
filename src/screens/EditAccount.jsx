import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState, useRef } from 'react';
import axios from 'axios';
import './EditAccount.css';

const EditAccount = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const btnRef = useRef(null);
  const spinnerRef = useRef(null);

  const handleFileInputClick = () => {
    const fileInput = document.querySelector('.EditAccount-upload');
    fileInput.click();
  };

  const handleImageSelect = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreviewUrl(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImagePreviewUrl(null);
    }
  };

  const handleEditAccount = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Validar campos de entrada
    if (!username || !email || !password) {
      setError('Por favor, complete todos los campos');
      setIsLoading(false);
      return;
    }

    const formData = new FormData();

    const id = localStorage.getItem('id');

    formData.append('id', id);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);

    // Verificar si se ha seleccionado una imagen
    if (selectedImage) {
      const fileName = selectedImage.name.split('\\').pop().split('/').pop();
      formData.append('profile_picture', selectedImage, fileName);
    } else {
      formData.append('profile_picture', null);
    }

    try {
      const response = await axios.post(
        'http://localhost:3000/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      // Manejar la respuesta del servidor
      console.log('Usuario actualizado exitosamente:', response.data);
      setIsLoading(false);

      // Mostrar mensaje de éxito al usuario o realizar alguna otra acción
    } catch (error) {
      setError('Error al actualizar el usuario');
      console.error('Error al actualizar el usuario:', error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="Header-container">
        <Header />
      </div>
      <section className="EditAccount-section">
        <form className="EditAccount-form">
          {error && <p>{error}</p>}
          <img src={imagePreviewUrl} alt="" className="EditAccount-img" />
          <div className="EditAccount-imgContainer">
            <img src="EditAccount.svg" alt="" />
            <span className="Button" onClick={handleFileInputClick}>
              Subir foto de perfil
            </span>
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              style={{ display: 'none' }}
              className="EditAccount-upload"
              onChange={handleImageSelect}
            />
          </div>
          <input
            className="EditAccount-input"
            type="text"
            placeholder="Full name"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="EditAccount-input"
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="EditAccount-input"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button
            className={`EditAccount-button ${isLoading ? 'Loading' : ''}`}
            onClick={handleEditAccount}
            ref={btnRef}
          >
            {isLoading ? (
              <img
                src="BlueLoader.svg"
                alt=""
                className="login-loader loader-checked"
                ref={spinnerRef}
              />
            ) : (
              'Edit account'
            )}
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default EditAccount;
