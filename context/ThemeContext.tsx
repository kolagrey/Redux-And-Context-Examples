import * as React from 'react';

type Dictionary = {
  [key: string]: any
}

type ContextProps = {
  style: {
    border: Dictionary;
    color: Dictionary;
  };
  theme: Dictionary
  switchTheme: () => void;
};

interface IProps {
  children: React.ReactNode;
}

const ThemeContext = React.createContext<Partial<ContextProps>>({});

export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = (props: IProps) => {
  const [isDark, setDark] = React.useState(true);
  const theme = isDark
    ? {
        backgroundColor: 'black',
        color: 'white',
        padding: 20,
      }
    : {
        backgroundColor: 'white',
        color: 'black',
        padding: 20,
      };
  const style = {
    color: {
      pink: 'pink',
      yellow: 'yellow',
      red: 'red',
    },
    border: {
      1: 1,
      2: 2,
      rounded: `2px solid ${theme.color}`,
    },
  };
  const switchTheme = () => setDark((prev) => !prev);
  return (
    <ThemeContext.Provider value={{ style, theme, switchTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
