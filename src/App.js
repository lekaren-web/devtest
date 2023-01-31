
import React, { useEffect, useState } from "react";


const App = () => {
    const [data, setData] = useState(null);
    const id = '528560dc-0507-4db9-94f9-f1afa80d0e07'        

    const api = `https://fe-test.marketing4storage.com/cart/reserve/${id}`;

   
    
     useEffect(() => {
          console.log("start call api")
    fetch(api)
        .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS")
                return response.json();     
            }else if(response.status === 408){
                console.log("SOMETHING WENT WRONG")
                this.setState({ requestFailed: true })
            }
        })
        .then((data) => {
            this.setState({ isLoading: false, downlines: data.response })
            console.log("DATA STORED")
        })
        .catch((error) => {
            this.setState({ requestFailed: true })
        })
  }, [])

    return (
        
       <div>{data}</div>
    );
};

export default App;
