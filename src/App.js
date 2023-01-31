import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const[test, setTes] = useState('');
  
  useEffect(() => {
    const url = "https://api.adviceslip.com/advice"
}, []);
    
    const fetchData = async () => {
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
		} catch (error) {
        console.log("error", error);
		}
};
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>this is a test!!</code> 
        </p>
      </header>
    </div>
  );
}

export default App;
