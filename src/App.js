import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainPage } from './pages/mainpage';
import { ContactPage } from './pages/contactpage';
import { ProjectsPage } from './pages/projectspage';
import { FooterText } from './components/footertext';
import { GlobalStyles } from './globalStyle.css';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { darkTheme, lightTheme } from './components/themes';
import Light from './assets/light-mode.png'
import Dark from './assets/dark-mode.png'
function App() {
  const [theme, setTheme] = useState('light')
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  console.log(theme)
  return (
    <div className="App">
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <div id='toggler' onClick={themeToggler}><img width='64px' height='64px' src={theme==='light'?Dark:Light} alt='Toggle theme'/></div>

        <Router>
          <Routes>
            <Route path='' element={<MainPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/Projects' element={<ProjectsPage />} />
          </Routes>
        </Router>
        <FooterText />
      </ThemeProvider>
    </div>
  );
}

export default App;
