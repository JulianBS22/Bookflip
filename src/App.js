import React from 'react';
import './App.css';
import AdvertsPage from './components/adverts/advertsPage';
import CustomButton from './components/shared/button'; // Importa el componente CustomButton

function App() {
  return (
    <div className="App">
      Welcome to Bookflip
      <AdvertsPage />
      <CustomButton text="Sign up" />
      <CustomButton text="Login" /> {/* aquí lo puedo cambiar */}
    </div>
  );
}

export default App;