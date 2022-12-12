import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import About from "./pages/About"
import Advantages from "./pages/Advantages"
import Braces from "./pages/Braces"
import Feedback from "./pages/Feedback"
import Rules from "./pages/Rules"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
function App() {
  return (
    <>
    <Navbar></Navbar>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/advantages" exact element={<Advantages />} />
          <Route path="/braces" exact element={<Braces />} />
          <Route path="/feedback" exact element={<Feedback />} />
          <Route path="/rules" exact element={<Rules />} />
        </Routes>
      </Router>

      <Footer></Footer>
</>
  );
}
  
export default App;