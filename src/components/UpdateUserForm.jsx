import { useState } from 'react';
import axios from 'axios';

export const UpdateUserForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleUpdate = async () => {
    try {
      const response = await axios.put('http://localhost:3000/update', {
        username: username,
        password: password
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error al actualizar el usuario');
      console.error('Error al actualizar el usuario:', error);
    }
  };

  return (
    <div>
      <h2>Actualizar Usuario</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleUpdate}>Actualizar</button>
      {message && <p>{message}</p>}
    </div>
  );
};
