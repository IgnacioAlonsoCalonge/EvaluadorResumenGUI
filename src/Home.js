import './App.css';
import Panelprincipal from './Components/Panelprincipal';
import Segundopanel from './Components2/Segundopanel';
import TercerPanel from './Components3/TercerPanel';


function Home() {
  return (
    <div className="App">
      
      <Panelprincipal/>

      <Segundopanel/>
      
  

      <TercerPanel/>

    </div>
  );
}

export default Home;