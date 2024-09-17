import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed-db';

const Register = () => {
  const { add } = useIndexedDB('users');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleRegister = (e) => {
    e.preventDefault();
    if (username && password) {
      add({ username, password, status: 'active', logins: [] })
        .then(() => alert('User registered successfully!'))
        .catch((error) => alert('Error: ' + error));
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
