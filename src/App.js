import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './pages/home/Home'
import SearchList from './pages/SearchList/SearchList'
import Hotel from './pages/hotel/Hotel'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/hotels" element={<SearchList/>} />
          <Route path="/hotels/:id" element={<Hotel/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
