import React, { useMemo, useState, useEffect } from 'react';
import Layout from '../shared/Layout';
import axios from 'axios';

const RemoteData = () => {
  const [data, setData] = useState([]);
  const users = useMemo(() => data, [data]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(resp => {
      setData(resp.data);
    });
  }, []);

  return (
    <Layout title="Data: Remote">
      <div className="row my-5">
        {users.map((user, i) => (
          <div className="col" key={i}>
            <div
              className="card my-2"
              style={{ width: '18rem' }}
            >
              <div className="card-body">
                <div className="card-title">
                  <h3>{user.name}</h3>
                  <small>{user.username}</small>
                </div>

                <div className="card.test">
                  <strong>Address</strong><br/>
                  <hr/>

                  {Object.entries(user.address).map(([key, value]) => (
                    typeof value === "string" ? (
                      <>
                        <strong>{key}:&nbsp;</strong>
                        {value}<br/>
                      </>
                    ) : null
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default RemoteData;