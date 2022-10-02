import * as React from 'react';

interface IProps {
  increment: () => vod;
  decrement: () => void;
  add: () => void;
  clear: () => void;
}

const CounterButtons: React.FC<IProps> = ({
  increment,
  decrement,
  add,
  clear,
}) => {
  return (
    <div style={{ display: 'flex', marginTop: 10 }}>
      <div style={{ paddingRight: 10 }}>
        <button
          style={{ padding: 10, backgroundColor: 'pink', border: 0 }}
          onClick={increment}
        >
          Increment
        </button>
      </div>
      <div style={{ paddingRight: 10 }}>
        <button
          style={{ padding: 10, backgroundColor: 'pink', border: 0 }}
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
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
    </div>
  );
};

export default CounterButtons;
