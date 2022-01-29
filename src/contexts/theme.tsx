import { createContext, useContext } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import theme from "../styles/theme";

interface MyThemeContextData {
  theme: DefaultTheme
}

const MyThemeContext = createContext<MyThemeContextData>({} as MyThemeContextData);

const MyThemeProvider: React.FC = ({ children }) => {

  return (
    <MyThemeContext.Provider value={{ theme }}> 
      <ThemeProvider theme={theme}>
        { children }
      </ThemeProvider>
    </MyThemeContext.Provider>
  );

}

const useMyTheme = (): MyThemeContextData => {
  const context = useContext(MyThemeContext);

  return context;
}

export { MyThemeProvider, useMyTheme};