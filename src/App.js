import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './views/home';
import ContactMe from './components/ContactMe';
import AboutMe from './components/AboutMe';

const App = () => (
  <div className="App">
    <Routes>
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/" element={<Layout />} />
      <Route path="*" element={<Layout />} />
    </Routes>
  </div>
);

export default App;
