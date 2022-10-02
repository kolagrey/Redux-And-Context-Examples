import * as React from 'react';

const InputControl = ({ controlRef }) => {
  const [name, setName] = React.useState('');

  const onNameInputChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <input ref={controlRef} type="text" onChange={onNameInputChange} value={name} />
    </div>
  );
};

export default React.forwardRef(InputControl);
