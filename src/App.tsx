import React from 'react'
import './App.css'
import LoginForm from "./LoginForm";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ForgotPasswordPage from "./ForgotPasswordPage";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginForm/>}/>
          <Route path="/forgot-password" element={<ForgotPasswordPage/>}/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
