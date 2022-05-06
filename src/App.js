import './App.css';
import {useState} from 'react';
import BoxGenerator from './Components/BoxGenerator';
import BoxOutput from './Components/BoxOutput';

function App() {
  const [colors, setColors] = useState([]);

  const newColorBox = (color) => {
    const tempArr = [...colors, color]
    setColors( tempArr );
  }

  return (
    <div className="App">
      <BoxGenerator newColorBox={ newColorBox }/>
      <BoxOutput colors={ colors }/>
    </div>
  );
}

export default App;
