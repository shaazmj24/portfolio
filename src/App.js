import Aboutme from './components/aboutme'; 
import Project from './components/projects'; 
import Nav from './navBar'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() { 
    return (
    <Router>    
      <div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Aboutme/>} />
          <Route path="/projects" element={<Project/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;








