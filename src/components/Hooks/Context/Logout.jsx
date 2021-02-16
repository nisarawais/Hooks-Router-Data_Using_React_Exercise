import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

const Logout = () => {
  const { setUser } = useContext(UserContext);

  return (
    <button
      className="btn btn-secondary"
      onClick={() => setUser(false)}
    >
      Logout
    </button>
  );
};

export default Logout;