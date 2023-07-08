import logo from './logo.svg';
import './App.css';
import Navbar from './TataCliqPages/Navbar';
import Home from './TataCliqPages/Home';
import Cate_dropdown from './TataCliqPages/Cate_dropdown';
import Men from './TataCliqPages/Men';
import { Route, Routes } from 'react-router-dom';
import Footer from './TataCliqPages/Footer';
import Multiple_pro from './TataCliqPages/Multiple_pro';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/cate_dropdown" element={<Cate_dropdown/>}/>
        <Route exact path="/multiple-pro" element={<Multiple_pro/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
