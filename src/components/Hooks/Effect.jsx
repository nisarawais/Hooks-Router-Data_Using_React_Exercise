import React, { useState, useEffect } from 'react';
import Layout from '../shared/Layout';

const Effect = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  
  useEffect(() => {
    const hue = 30 + 240 * (30 - count) / 60;
    document.body.style.background = `hsl(${hue}, 100%, ${count}%)`;
    document.body.style.transition = "0.2s";
  }, [count]);

  return (
    <Layout title="Hooks: Effect">
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
 
export default Effect;