import './App.css';
import { Routes, Route } from 'react-router-dom';
import SocialMedia from './components/SocialMedia';
import Footer from './components/footer';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/" element={<SocialMedia />} />
    </Routes>
    <Footer />
  </div>
);

export default App;
