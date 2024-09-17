// UserList.js
import React, { useState, useEffect } from 'react';
import initDatabase from '../db';
import UserActions from './UserActions';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const db = await initDatabase();
      const usersFromDB = await db.getAll('users');
      setUsers(usersFromDB);
    };
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} - Status: {user.status}
            <UserActions user={user} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
