import React from 'react';
import Layout from '../../shared/Layout';
import UserProvider from './UserProvider';
import Login from './Login';
import Logout from './Logout';
import Display from './Display';

const Context = () => {
  return (
    <Layout title="Hooks: Context">
      <UserProvider>
        <div className="my-5">
          <Display/>

          <div className="btn-group">
            <Login/>
            <Logout/>
          </div>
        </div>
      </UserProvider>
    </Layout>
  );
}
 
export default Context;