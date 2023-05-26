import { Route, Routes } from 'react-router-dom';
import Problem from './pages/Problems';
import Home from './pages/Home';
import Rank from './pages/Rank'
import 'bootstrap/dist/css/bootstrap.min.css';
import Flag from './pages/Flag';
import Hof from './pages/Hof';
import './App.css';
import ProblemView from './pages/ProblemView';
import Header from './components/Header';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';


const App = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <CssBaseline />
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/problem' element={<Problem />}></Route>
          <Route path='/problem/:no' element={<ProblemView />} />
          <Route path="/rank" element={<Rank />} />
          <Route path="/flag" element={<Flag />} />
          <Route path="/hof" element={<Hof />} />
        </Routes>
      </Box >
    </>
  );
};

export default App;