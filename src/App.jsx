import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Practice from "./pages/Practice";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:eventId' element={<EventDetails />} />
        <Route path='/practice' element={<Practice />}  />
      </Routes>
    </BrowserRouter>
  )
}

export default App;