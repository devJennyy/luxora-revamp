import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Homepage from "./pages/Homepage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faqs from "./pages/Faqs";
import HelpCenter from "./pages/HelpCenter";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/help-center" element={<HelpCenter />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
