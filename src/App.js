/*import React from "react";
import "./App.css";
import AdvertsPage from "./components/adverts/advertsPage";
import LoginPage from "./components/auth/LoginPage";
import StyledButton from "./components/shared/button";
import Diversity2Icon from "@mui/icons-material/Diversity2";
function App() {
  return (
    <div className="App">
      Welcome to Bookflip
      <div>
        <svg logo="Diversity2Icon"></svg>
        <LoginPage />
        <AdvertsPage />

        <StyledButton onClick={(e) => console.log("apretao")}>
          Login
        </StyledButton>
        <StyledButton onClick={(e) => console.log("apretao")}>
          Sign Up{" "}
        </StyledButton>
        {/* aquí lo puedo cambiar *//*
      </div>
    </div>
  );
}

export default App;
*/

import React from "react";
import "./App.css";
//import AdvertsPage from "./components/adverts/advertsPage";
//import LoginPage from "./components/auth/LoginPage";
import { Routes,Route } from 'react-router-dom'
import IndexPage from "./pages/indexPage.jsx"
import LoginPage from "./pages/LoginPage.jsx"
import Layout from "./Layout.jsx";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";

axios.defaults.baseURL='http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element ={<IndexPage />} />
        <Route path ="/login" element={<LoginPage />} />
        <Route path ="/register" element={<RegisterPage />} />
      </Route>
    </Routes>
    
  );
}

export default App;
