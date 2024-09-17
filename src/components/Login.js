// Login.js
import React, { useState } from 'react';
import initDatabase from '../db';
import UserList from './UserList';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const db = await initDatabase();
    const user = await db.get('users', username); // Adjust based on your index setup
    if (user && user.password === password && user.status === 'active') {
      user.logins.push(new Date().toISOString());
      db.put('users', user).then(() => setLoggedIn(true));
    } else {
      alert('Invalid credentials or account blocked.');
    }
  };

  return (
    <div>
      {loggedIn ? (
        <UserList />
      ) : (
        <form onSubmit={handleLogin}>
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
          <button type="submit">Log In</button>
        </form>
      )}
    </div>
  );
};

export default Login;
