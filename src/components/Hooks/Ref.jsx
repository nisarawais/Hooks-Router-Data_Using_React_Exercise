import React, { useState, useEffect, useRef } from 'react';
import Layout from '../shared/Layout';

const Ref = () => {
  const [count, setCount] = useState(0);
  const buttonEl = useRef();

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  useEffect(() => {
    const hue = 30 + 240 * (30 - count) / 60;
    document.body.style.background = `hsl(${hue}, 100%, ${count}%)`;
    document.body.style.transition = "0.2s";

    buttonEl.current.onwheel = e => e.deltaY > 0 ? decrement() : increment();
  }, [count]);

  return (
    <Layout title="Hooks: Ref">
      <div className="my-5">
        <div className="btn-group">
          <button className="btn btn-success" onClick={increment}>+</button>
          <button className="btn btn-secondary" ref={buttonEl} disabled>{count}</button>
          <button className="btn btn-warning" onClick={decrement}>-</button>
        </div>
      </div>
    </Layout>
  );
}
 
export default Ref;