import './App.css';
import {useState} from 'react';
import BoxGenerator from './Components/BoxGenerator';
import BoxOutput from './Components/BoxOutput';

function App() {
  const [boxes, setBoxes] = useState([]);

  const newBox = (box) => {
    // const tempArr = [...colors, color]
    setBoxes( [...boxes, box]);
    console.log(box)
  }

  return (
    <div className="App">
      <BoxGenerator newBox={ newBox }/>
      <BoxOutput boxes={ boxes }/>
    </div>
  );
}

export default App;
