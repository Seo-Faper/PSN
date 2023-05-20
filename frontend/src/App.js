import { Route, Routes } from 'react-router-dom';
import Problem from './pages/Problems';
import Home from './pages/Home';
import Rank from './pages/Rank'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from './pages/Flag';
import Hof from './pages/Hof';
import './App.css';



const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/problem" element={<Problem />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/flag" element={<Flag />} />
      <Route path="/hof" element={<Hof />} />
    </Routes>
  );
};

export default App;