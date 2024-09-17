import React, { useState } from 'react';
import { useIndexedDB } from 'react-indexed_db';
import UserList from './UserList';

const Login = () => {
  const { getByIndex } = useIndexedDB('users');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    const userData = await getByIndex('username', username);
    if (userData && userData.password === password && userData.status === 'active') {
      userData.logins.push(new Date().toISOString());
      setLoggedIn(true);
      setUser(userData);
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
