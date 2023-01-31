import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const fetchData = async () => {
    try {
        const response = await fetch('https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07');
        const json = await response.json();
        console.log(json);
		} catch (error) {
        console.log("error", error);
		}
	};
}
    
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
