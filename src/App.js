import './App.css';
import './Evaluaciones.css'
import './Resumenes.css'
import NavBarFinal from './Components/NavBarFinal';
import { Routes, Route } from 'react-router-dom';
import Evaluacion from './ComponentsEval/Evaluacion';


function App() {
  return (
    <div className="App">
      <NavBarFinal/>
      <Routes>
        <Route path='/' element={<Evaluacion/>}/>
        <Route path="/evaluar" element={<Evaluacion/>}/>
      </Routes>
    </div>
  );
}

export default App;
