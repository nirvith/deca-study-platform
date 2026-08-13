import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from "./pages/Events";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;