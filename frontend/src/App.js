import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  useState } from "react";

import { useAuth } from "./hooks/useAuth";

import Quiz from "./pages/Quiz";
import NavBar from "./components/navbar/NavBar";
import SignIn from "./pages/SignIn";
import AuthProvider from "./components/context-providers/AuthProvider";


import "./App.css";

function App() {

  const { userId, isLoggedIn } = useAuth();

  const userDetails = JSON.parse(localStorage.getItem('userDetails'))
  
  let loginStatus = userDetails? userDetails['isLoggedIn'] : isLoggedIn

  return (
    <BrowserRouter>
    <AuthProvider>
      <Routes>
          <Route path="/" element={<NavBar user={userId} />}></Route>
          {!loginStatus && <Route path="/SignIn" element={<SignIn />}></Route>}
          <Route path="/Quiz" element={<Quiz user={userId} />}></Route>
      </Routes>
    </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
