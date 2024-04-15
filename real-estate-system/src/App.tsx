import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignUpForm";
import LandingPage from "./pages/LandingPage";
import PropertyListing from "./components/PropertyListing";
import PropertyFormPage from "./components/PropertyFormPage";
import PropertyDetailsPage from "./components/PropertyDetailPage";
import { PropertyProvider } from "./contexts/PropertyContext"; // Ensure this is the correct import

const App: React.FC = () => {
  return (
    <Router>
      <PropertyProvider>
        {" "}
        <Navbar />
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route
              path="/property-details/:propertyId"
              element={<PropertyDetailsPage />}
            />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/listing" element={<PropertyListing />} />
            <Route path="/property-form" element={<PropertyFormPage />} />
            <Route
              path="/property-form/:propertyId"
              element={<PropertyFormPage />}
            />
            <Route
              path="/property-details/:propertyId"
              element={<PropertyDetailsPage />}
            />
          </Routes>
        </div>
      </PropertyProvider>
    </Router>
  );
};

export default App;
