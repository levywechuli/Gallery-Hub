import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ArtworkPage from './components/ArtworkPage';
import AddArtworkForm from './components/AddArtworkForm';
import ArtworkList from './components/ArtworkList';
import Navbar from "./components/Navbar"

function App() {
   return(
    <Router>
      <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<ArtworkList />} />
        <Route path="/artwork/:id" element={<ArtworkPage />} />
        <Route path="/add-artwork" element={<AddArtworkForm />} />
      
    </Routes>
    </div>
    </Router>
   )
  
}

export default App;
