
import React, { useEffect, useState } from "react";


const App = () => {
    const [data, setData] = useState([]);

     useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((resJson) => {
        const dataCollected = JSON.parse(resJson)
        setData(dataCollected)
    })
  }, [])

    return (
        
       <div>{data}</div>
    );
};

export default App;
