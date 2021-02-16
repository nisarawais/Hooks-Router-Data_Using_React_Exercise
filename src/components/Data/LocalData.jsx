import React, { useMemo } from 'react';
import Layout from '../shared/Layout';
import data from './data.json';

const LocalData = () => {
  const users = useMemo(() => data, []);

  return (
    <Layout title="Data: Local">
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

                  {Object.entries(user.address).map(([key, value], k) => (
                    typeof value === "string" ? (
                      <div key={k}>
                        <strong>{key}:&nbsp;</strong>
                        {value}<br/>
                      </div>
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

export default LocalData;