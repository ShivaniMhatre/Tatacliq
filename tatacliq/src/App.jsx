import logo from './logo.svg';
import './App.css';
import Navbar from './TataCliqPages/Navbar';
import Home from './TataCliqPages/Home';
import Cate_dropdown from './TataCliqPages/Cate_dropdown';
import Men from './TataCliqPages/Men';
import { Route, Routes } from 'react-router-dom';
import Footer from './TataCliqPages/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/men" element={<Men/>}/>
        <Route exact path="/cate_dropdown" element={<Cate_dropdown/>}/>
        
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
