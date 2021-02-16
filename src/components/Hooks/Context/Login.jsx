import React, { useContext } from 'react';
import { UserContext } from './UserProvider';

const Login = () => {
  const { setUser } = useContext(UserContext);

  return (
    <button
      className="btn btn-primary"
      onClick={() => setUser(true)}
    >
      Login
    </button>
  );
};

export default Login;