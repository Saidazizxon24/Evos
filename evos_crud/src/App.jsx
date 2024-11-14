import { useContext, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ThemContext from './context/ThemContext';
import Header from './Components/Header';
import AdminHeader from './admin/AdminHeader'; // Admin Header for the admin panel
import Main from './Components/Main';
import All from './admin/all'; // Admin panel component
import EditProduct from './admin/EditProduct';
import { DARK_MODE } from './constants/themeConstant'; // assuming this is where DARK_MODE is defined
import CreateProduct from './admin/adminpanel/createProduct';

function App() {
  const { theme } = useContext(ThemContext);
  const location = useLocation(); // useLocation hook to access the current path

  useEffect(() => {
    if (theme === DARK_MODE) {
      document.body.classList.add('dark_body');
    } else {
      document.body.classList.remove('dark_body');
    }
  }, [theme]);

  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      {isAdminRoute ? <AdminHeader /> : <Header />}
      

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />

        {/* Admin Routes */}
        <Route path="/admin" element={<All />} />
        <Route path="/admin/create" element={<CreateProduct />} />
        <Route path="/admin/edit/:id" element={<EditProduct />} />
      </Routes>
    </>
  );
}

export default App;
