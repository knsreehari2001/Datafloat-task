// Register.js
import React, { useState } from 'react';
import initDatabase from '../db';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    const db = await initDatabase();
    if (username && password) {
      db.add('users', { username, password, status: 'active', logins: [] })
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
