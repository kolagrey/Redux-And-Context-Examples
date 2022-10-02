import * as React from 'react';
import ControlButtons from './components/ControlButtons';
import Counter from './components/Counter';
import InputControl from './components/InputControl';
import UserList from './components/UserList';
import { useTheme } from './context/ThemeContext';
import { useUser } from './context/UserContext';
import './style.css';

export default function App() {
  const inputRef = React.useRef(null);
  const { list, save, clear } = useUser();
  const { style, theme, switchTheme } = useTheme();

  const clearInput = () => {
    inputRef.current.focus();
  };

  const addUser = () => {
    if (inputRef.current.value)
      save({
        name: inputRef.current.value,
        points: (90000 * Math.random()).toFixed(2),
      });
    clearInput();
  };

  const users = list();

  return (
    <div style={theme}>
      <UserList users={users} style={theme} border={style.border} />
      <InputControl controlRef={inputRef} />
      <ControlButtons add={addUser} clear={clear} toggle={switchTheme} />
      <Counter />
    </div>
  );
}
