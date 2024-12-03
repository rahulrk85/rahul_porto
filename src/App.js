
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import Header from "./components/Header"
import Images from './components/Images';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
  return (
      <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path='/' Component={Body}/>
        <Route path='/images' Component={Images}/>
        <Route path='/about' Component={About}/>
        <Route component={NotFound} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
