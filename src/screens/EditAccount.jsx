import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useState } from 'react';
import axios from 'axios';
import path from 'path';
import './EditAccount.css';

export const EditAccount = () => {
  const [id, setId] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
  const [error, setError] = useState(null);

  const handleFileInputClick = () => {
    const fileInput = document.querySelector('.upload-edit-account');
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

    // Validar campos de entrada
    if ( !username || !email || !password) {
      setError('Por favor, complete todos los campos');
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
      // Mostrar mensaje de éxito al usuario o realizar alguna otra acción
    } catch (error) {
      setError('Error al actualizar el usuario');
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <>
      <div className="header-container">
        <Header />
      </div>
      <section className="section-create-account">
        <form className="form-edit-account">
          {error && <p>{error}</p>}
          <img src={imagePreviewUrl} alt="" className="img-edit-account" />
          <div className="img-container-edit-account">
            <img src="EditAccount.svg" alt="" />
            <span className="button" onClick={handleFileInputClick}>
              Subir foto de perfil
            </span>
            <input
              type="file"
              name="profile_picture"
              accept="image/*"
              style={{ display: 'none' }}
              className="upload-edit-account"
              onChange={handleImageSelect}
            />
          </div>
          <input
            className="input-edit-account"
            type="text"
            placeholder="Full name"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <input
            className="input-edit-account"
            type="email"
            placeholder="E-mail"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            className="input-edit-account"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <button className="button-edit-account" onClick={handleEditAccount}>
            Edit account
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
};
