import './App.css';
import { Route, Routes } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Indian from './Indian';
import Chinese from './Chinese';
import Add from './Add';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path='/indian' element={<Indian/>}></Route>
      <Route path='/chinese' element={<Chinese/>}></Route>
      <Route path='/addnew' element={<Add/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
