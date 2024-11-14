import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtworkPage from './components/ArtworkPage';
import AddArtworkForm from './components/AddArtworkForm';
import ArtworkList from './components/ArtworkList';
import Navbar from "./components/Navbar"
import { useState } from 'react';


function App() {
  const [searchTerm, setSearchTerm] = useState("");

   return(
    <Router>
      <div>
    <Navbar onSearch={setSearchTerm} />
    <Routes>
        <Route path="/" element={<ArtworkList searchTerm={searchTerm}/>} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
        <Route path="/add-artwork" element={<AddArtworkForm />} />
      
    </Routes>
    </div>
    </Router>
   )
  
}

export default App;
