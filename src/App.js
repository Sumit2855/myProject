import {useState} from 'react';
import './App.css';

function App() {

  const [value,setValue] = useState(0);
  
  

    const increaseCounter = () => {
        setValue(value+1);
    }

    const decreaseCounter = () => {
        setValue(value-1);
    }

  


  return (
    <div className="App">
      <h1>Counter :{value}</h1>
      <button onClick={increaseCounter}>Increase +</button>
      <button onClick={decreaseCounter}>Decrease -</button>
     
    </div>
  );

}

export default App;
