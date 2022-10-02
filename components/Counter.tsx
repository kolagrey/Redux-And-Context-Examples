import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTheme } from '../context/ThemeContext';
import { authAction } from '../store/auth';
import { counterAction } from '../store/counter'
import CounterButtons from './CounterButtons';
import UserList from './UserList';

const Counter: React.FC = () => {
  const { users, counter, auth } = useSelector(({ counter, auth }) => ({
    users: counter.users,
    counter: counter.counter,
    auth,
  }));
  const { style, theme } = useTheme();

  const dispatch = useDispatch();

  const addUser = () => {
    dispatch(counterAction.addUser({ name: 'Grey', points: 90000 }));
  };

  const clearUsers = () => {
    dispatch(counterAction.deleteUsers());
  };

  const increment = () => {
    dispatch(counterAction.increment());
  };

  const decrement = () => {
    dispatch(counterAction.decrement());
  };

  const logIn = () => {
    dispatch(authAction.login({ user: 'Grey' }));
  };

  const logOut = () => {
    dispatch(authAction.logOut());
    dispatch(counterAction.deleteUsers());
  };

  return (
    <div>
      {auth.isLogin ? (
        <React.Fragment>
        <div style={{ paddingTop: 20}}>Hello {auth.user}</div>
          <div>
            <h1>{counter}</h1>
          </div>
          <div>
            <CounterButtons
              increment={increment}
              decrement={decrement}
              add={addUser}
              clear={clearUsers}
            />
          </div>
          <div style={{ paddingTop: 20 }}>
            <UserList users={users} style={theme} border={style.border} />
            <div style={{ paddingTop: 20 }}>
              <button onClick={logOut}>Log Out</button>
            </div>
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <div style={{ paddingTop: 20 }}>User is not logged in!</div>
          <div style={{ paddingTop: 20 }}>
            <button onClick={logIn}>Log In</button>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default Counter;
