import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Element } from "react-scroll";
import Menu from './Menu';
import Sections from './Section';


function App() {
  return (
    // <Router>
    //   <Menu />
    //   <div className="container">
    //     <Routes>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/skills" element={<Skills />} />
    //       <Route path="/contact" element={<Contact />} />
    //       <Route path="/resume" element={<Resume />} />
    //     </Routes>
        
    //   </div>
    // </Router>
    <div>
      <Menu />
      <Sections />
    </div>
  );
}

export default App;