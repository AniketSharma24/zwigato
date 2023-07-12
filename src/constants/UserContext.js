import { createContext } from 'react';

const UserContext = createContext({
  user: {
    name: 'Firstname Lastname',
    email: 'firstname@example.com',
  },
});

export default UserContext;
