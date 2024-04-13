import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import LandingPage from "./pages/LandingPage";
import PropertyListing from "./components/PropertyListing";
import PropertyManagementPage from "./components/PropertyManagementPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="mt-8">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/manageproperties"
            element={<PropertyManagementPage />}
          />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/listing" element={<PropertyListing />} />
          <Route path="/signup" element={<SignupForm />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
