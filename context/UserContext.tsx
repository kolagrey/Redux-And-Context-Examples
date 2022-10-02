import * as React from 'react';

type User = {
  name: string;
  points: string;
}
type UserContextProps = {
  save: (user: User) => void;
  clear: () => void;
  list: () => Array<User>;
};

interface IProps {
  children: React.ReactNode;
}

const UserContext = React.createContext<Partial<UserContextProps>>({});

const userHook = () : UserContextProps => {
  const [user, setUser] = React.useState<Array<User>>([]);

  const save = (value: User) => {
    setUser((prev) => [value, ...prev]);
  };

  const clear = () => {
    setUser([]);
  };

  const list = (): Array<User> => {
    return user;
  };

  return { save, clear, list };
};

export const useUser = () => React.useContext(UserContext);

export const UserProvider = ({ children }) => {
  const { save, clear, list } = userHook();
  return (
    <UserContext.Provider value={{ save, clear, list }}>
      {children}
    </UserContext.Provider>
  );
};
