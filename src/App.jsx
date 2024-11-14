
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import { Route, Routes } from 'react-router-dom';



import { useContext, useEffect } from 'react';
import { ThemeContext } from './context/ThemContext';
import { DARK_MODE } from './constants/themeConstant';
import All from './admin/adminpanel/all';
import AdminHeader from './Components/AdminHeader';

function App() {
  const { theme } = useContext(ThemeContext)

  useEffect(() => {
    if (theme === DARK_MODE) {
      document.body.classList.add('dark_body')
    } else {
      document.body.classList.remove('dark_body')
    }
  }, [theme])
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {/* Conditionally render the appropriate header */}
      {isAdminRoute ? <AdminHeader /> : <Header />}
      
      <Routes>
        {/* Regular routes */}
        <Route path="/" element={<Main />} />
      </Routes>

      <Routes>
        {/* Admin-specific routes */}
        <Route path="/admin" element={<All />} />
      </Routes>
    </>
  );
}

export default App;

