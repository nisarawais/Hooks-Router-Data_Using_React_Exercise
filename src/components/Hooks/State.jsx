import React, { useState } from 'react';
import Layout from '../shared/Layout';

const State = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  return (
    <Layout title="Hooks: State">
      <div className="my-5">
        <div className="btn-group">
          <button className="btn btn-success" onClick={increment}>+</button>
          <button className="btn btn-secondary" disabled>{count}</button>
          <button className="btn btn-warning" onClick={decrement}>-</button>
        </div>
      </div>
    </Layout>
  );
}
 
export default State;