import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router";
import Homepage from "./pages/Homepage";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/homepage" replace />} />
        <Route path="/homepage" element={<Homepage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
