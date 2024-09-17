// db.js
import { openDB } from 'idb';

const DB_NAME = 'UserDB';
const DB_VERSION = 1;
const STORE_NAME = 'users';

const initDatabase = async () => {
  const db = await openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      const store = db.createObjectStore(STORE_NAME, { keyPath: 'id', autoIncrement: true });
      store.createIndex('username', 'username', { unique: true });
      store.createIndex('password', 'password');
      store.createIndex('status', 'status');
      store.createIndex('logins', 'logins');
    },
  });
  return db;
};

export default initDatabase;
