import './App.css';
import AppBar from './components/AppBar';
import Banner from './components/Banner';
import Box from '@mui/material/Box';
import Features1 from './components/Features1';
import Features2 from './components/Features2';
import Features3 from './components/Features3';
import Features4 from './components/Features4';
import Products from './components/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Box sx={{ background: 'linear-gradient(45deg, #262228 30%, #070709 90%)', }}>
        <AppBar />
        <Banner />
      </Box>
      <Features1 />
      <Features2 />
      <Features3 />
      <Features4 />
      <Products />
      <Footer />
      
    </div>
  );
}

export default App;
