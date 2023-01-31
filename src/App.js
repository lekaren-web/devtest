
import React, { useEffect, useState } from "react";


const App = () => {
    const [data, setData] = useState(null);

     useEffect(() => {
         try{
    fetch('https://fe-test.marketing4storage.com/cart/reserve/528560dc-0507-4db9-94f9-f1afa80d0e07')
      .then((res) => res.json())
      .then((resJson) => {
        const dataCollected = resJson
        console.log(dataCollected)
        setData(dataCollected)
    })
         } catch (error) {
                console.log("error", error);
            }
  }, [])

    return (
        
       <div>{data}</div>
    );
};

export default App;
