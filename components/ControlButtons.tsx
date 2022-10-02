import * as React from 'react';

const ControlButtons = ({ add, clear, toggle }) => {
  return (
    <div style={{ display: 'flex', marginTop: 10 }}>
      <div style={{ paddingRight: 10 }}>
        <button
          style={{ padding: 10, backgroundColor: 'pink', border: 0 }}
          onClick={add}
        >
          Add User
        </button>
      </div>
      <div style={{ paddingRight: 10 }}>
        <button
          style={{ padding: 10, backgroundColor: 'pink', border: 0 }}
          onClick={clear}
        >
          Clear User
        </button>
      </div>
      <div style={{ paddingRight: 10 }}>
        <button
          style={{ padding: 10, backgroundColor: 'pink', border: 0 }}
          onClick={toggle}
        >
          Switch Theme
        </button>
      </div>
    </div>
  );
};

export default ControlButtons;
