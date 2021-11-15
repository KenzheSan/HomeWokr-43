import React, { useState } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);// функция для модальных акаунтов

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    // Через лифтин ап приходят данные
    setIsLoggedIn(true); // как прийдут данные меняем значение на true
  };

  const logoutHandler = () => { // функция для закрытий и изменения значения
    setIsLoggedIn(false);
  };

  //передаем через пропсы ,фунцию  + useState

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} /> 
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default App;
