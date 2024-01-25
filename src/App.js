import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import ProductListPage from './components/ProductList';
import AboutPage from './components/AboutPage';

const App = () => {
  const [accessToken, setAccessToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    setAccessToken(localStorage.getItem('accessToken'));
  }, [accessToken]);

  const handleLogin = (token) => {
    // localStorage.setItem('accessToken', token) // please uncomment when token is generated
    localStorage.setItem('accessToken', 'sdfksdfk') // please comment when token is generated
    setAccessToken(token);
  };
  
  return (
    <div>
        <header style={{flexWrap: 'wrap', display: 'flex', alignItems: 'center', backgroundColor: 'lightgreen'}}>
          <div >
            <img src="http://www.hindigraphics.in/wp-content/uploads/2019/01/pro.png" alt="Logo" style={{width: '230px'}} />
          </div>
          <h1>Provision Store</h1>
        </header>
        <Routes>
          <Route path="/" element={ <LoginPage onLogin={handleLogin} />} />
          <Route path="/products" element={ accessToken !== null ? <ProductListPage accessToken={accessToken} /> : navigate('/')}/>
          <Route path="*" element={<AboutPage />} />
        </Routes>
    </div>
  );
};

export default App;
