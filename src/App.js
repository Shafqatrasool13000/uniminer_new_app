import { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'swiper/css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
// import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UniminerDashborad from './components/UniminerDashboard/UniminerDashboard';

export const ToggleModeContext = createContext('light');
function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(theme, 'theme');
  return (
  
    <ToggleModeContext.Provider value={{themeToggler:themeToggler,theme:theme}}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <>
          <GlobalStyles />
          {/* <button onClick={themeToggler}>Switch Theme</button> */}
          {/* <Login/> */}
          {/* <Register/> */}
          <UniminerDashborad />

        </>
      </ThemeProvider>
    </ToggleModeContext.Provider>

  );
}

export default App;
