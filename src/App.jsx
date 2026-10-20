import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Produto from "./pages/Produtos";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#141414]">
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Produto />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
