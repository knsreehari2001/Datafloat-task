// UserActions.js
import React from 'react';
import initDatabase from '../db';

const UserActions = ({ user }) => {
  const handleBlock = async () => {
    const db = await initDatabase();
    db.put('users', { ...user, status: 'blocked' });
  };

  const handleUnblock = async () => {
    const db = await initDatabase();
    db.put('users', { ...user, status: 'active' });
  };

  const handleDelete = async () => {
    const db = await initDatabase();
    db.delete('users', user.id).then(() => alert('User deleted'));
  };

  const handleShowLogins = () => {
    alert('Previous Logins: ' + user.logins.join(', '));
  };

  return (
    <div>
      <button onClick={handleBlock}>Block</button>
      <button onClick={handleUnblock}>Unblock</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleShowLogins}>Show Logins</button>
    </div>
  );
};

export default UserActions;
