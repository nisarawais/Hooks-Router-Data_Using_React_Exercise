import React, { useEffect } from 'react';
import Header from './Header';

const Layout = ({title, children}) => {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <>
      <Header title={title}/>

      <div className="container mt-5">
        {children}
      </div>
    </>
  );
};
 
export default Layout;