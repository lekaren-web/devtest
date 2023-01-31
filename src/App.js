
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
        
      
        <div>
            <form onSubmit={handleSubmit} class="form">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" onChange={(e) => {
                setName(e.target.value)
            }}/>

               <label for="email">Email</label>
            <input type="text" id="email" name="email" onChange={(e) => {
                setEmail(e.target.value)
            }}/>

            <label for="street">Name</label>
            <input type="text" id="street" name="street" onChange={(e) => {
                setStreet(e.target.value)
            }}/>
            

            <label for="city">City</label>
            <input type="text" name="city" id="city" onChange={(e) => {
                setCity(e.target.value)
            }}/>

            <label for="state">State</label>
            <input type="text" name="state" id="state" onChange={(e) => {
                setState(e.target.value)
            }}/>


           <label for="zipcode">Zipcode</label>
            <input type="text" name="zipcode" id="zipcode" onChange={(e) => {
                setZipCode(e.target.value)
            }}/>
         

        <input type="submit" value="Submit" />

        </form>
        </div>

    );
};

export default App;
