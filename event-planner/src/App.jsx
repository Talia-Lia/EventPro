import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Budget from "./pages/Budget";
import Guests from "./pages/Guests";
import Agenda from "./pages/Agenda";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/guests" element={<Guests />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
