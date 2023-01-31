
import React, { useEffect, useState } from "react";


const App = () => {
    const [data, setData] = useState(null);
    const [requestFailed, setrequestFailed] = useState(null);
    const id = '528560dc-0507-4db9-94f9-f1afa80d0e07'        
    
    const api = `https://fe-test.marketing4storage.com`;
    const[ name, setName] = useState("");
    const[ street, setStreet] = useState("");
    const[ city, setCity] = useState("");
    const[ state, setState] = useState("");
    const[ zip_code, setZipCode] = useState("");
    const[ email, setEmail] = useState("");
    
    const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  data: data,
  url: `${api}/cart/tenant`,
};
    const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.value)
    fetch(options)
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
  };

   
    
     useEffect(() => {
          console.log("start call api")
    fetch(`${api}/cart/reserve/${id}`)
        .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS")
                return response.json();     
            }else if(response.status === 408){
                console.log("SOMETHING WENT WRONG")
                setrequestFailed(true)
            }
        })
        .then((e) => {
        setData(e.response)
            console.log("DATA STORED")
        })
        .catch((error) => {
            setrequestFailed(true)
        })
  }, [])

    return (
        
       <div>{data}</div>
    );
};

export default App;
