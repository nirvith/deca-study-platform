import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Practice from "./pages/Practice";
import Exam from "./pages/Exam";
import Flashcards from "./pages/Flashcards";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/events' element={<Events />} />
        <Route path='/events/:eventId' element={<EventDetails />} />
        <Route path='/practice/:eventId' element={<Practice />} />
        <Route path='/practice/:eventId/exam' element={<Exam />} />
        <Route path='/practice/:eventId/flashcards' element={<Flashcards />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;