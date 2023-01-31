import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const[test, setTes] = useState('');
  
  const fetchData =  async () => {
   await axios.get('https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07')
        .then(response => {
        console.log('heres the response:', response.data)
        }
        );
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
