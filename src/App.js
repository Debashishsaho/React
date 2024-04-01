import React,{useState} from 'react';
import './App.css';

function App() {
  const [temp,setTemp]=useState(10);
  const [btnclr,setBtnClr]=useState('');
  const incrementFunc = () => {
    const newtemp=temp +1 
    if (newtemp > 15){
      setBtnClr('hot')
    }
    setTemp(newtemp)
  }
  const decrementFunc = () => {
    const newtemp=temp -1
    if (newtemp <=15){
      setBtnClr('cold')
    }
    setTemp(newtemp)
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${btnclr}`}>{temp}°C</div>
      </div>
      <div className="button-cointainer">
        <button onClick={incrementFunc}>+</button>
        <button onClick={decrementFunc}>-</button>
      </div>
    </div>
  );
}

export default App;
