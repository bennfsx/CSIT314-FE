import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-8">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
