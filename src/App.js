import { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import 'swiper/css';
import {
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./components/GlobalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "./components/Themes/Themes";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import UniminerDashborad from './components/UniminerDashboard/UniminerDashboard';
import Overview from './components/Overview/Overview';
import Hosting from './components/Hosting/Hosting';
import Machines from './components/Machines/Machines';
import Stake from './components/Stake/Stake';
import Settings from './components/Settings/Settings';
import HostingDetail from './components/Hosting/HostingDetail';
import './App.css';
export const ToggleModeContext = createContext('light');
function App() {
  const [theme, setTheme] = useState('dark');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(theme, 'theme');
  return (
    <ToggleModeContext.Provider value={{ themeToggler: themeToggler, theme: theme }}>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="overview" element={<UniminerDashborad>
            <Overview/>
          </UniminerDashborad>} />
          <Route path="hosting" element={<UniminerDashborad>
            <Hosting/>
          </UniminerDashborad>} />
          <Route path="machines" element={<UniminerDashborad>
            <Machines/>
          </UniminerDashborad>} />
          <Route path="stake" element={<UniminerDashborad>
            <Stake/>
          </UniminerDashborad>} />
          <Route path="settings" element={<UniminerDashborad>
            <Settings/>
          </UniminerDashborad>} />
          <Route path="hosting-details" element={<UniminerDashborad>
            <HostingDetail/>
          </UniminerDashborad>} />
       
        </Routes>
        <GlobalStyles />
      </ThemeProvider>
    </ToggleModeContext.Provider>
  );
}

export default App;
