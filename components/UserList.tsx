import * as React from 'react';

const UserList = ({ users, style, border }) => {
  return (
    <React.Fragment>
      {users.length ? (
        users.map((u, i) => (
          <div
            key={i}
            style={{
              marginBottom: 10,
              padding: 5,
              borderRadius: 5,
              border: border.rounded,
            }}
          >
            {u.name}, {u.points}
          </div>
        ))
      ) : (
        <div style={style}>No user in list</div>
      )}
    </React.Fragment>
  );
};

export default UserList;
