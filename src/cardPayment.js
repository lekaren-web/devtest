import React, { useEffect, useState } from "react";

const PaymentForm = () => {
    const [data, setData] = useState(null);
    const [requestFailed, setrequestFailed] = useState(null);
    const id = '528560dc-0507-4db9-94f9-f1afa80d0e07'        
    
    const api = `https://fe-test.marketing4storage.com`;
    const[ card_number, setcard_number] = useState('4242424242424242');
    const[ name_on_card, setname_on_card] = useState("");
    const[ expiration_month, setexpiration_month] = useState("");
    const[ expiration_year, setexpiration_year] = useState("");
    const[ cvv, setcvv] = useState("");
//     Must be 2023 to 2030.
    const [errorMessage, setErrorMessage] = useState("");

// ○ cvv - card 3-digit security code. You can use any 3 digit number for testing.
// ○ You will post this to the backend endpoint using content type
// “application/x-www-form-urlencoded”. The url is
// https://fe-test.marketing4storage.com/cart/payment
   const options = {
  method: 'POST',
  headers: { 'content-type': 'application/x-www-form-urlencoded' }
};
    const handleSubmit = (e) => {
    e.preventDefault();
    setData(e.target.value)
    fetch(`${api}/cart/payment`, options)
    .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
        setErrorMessage(error);
        alert(error);
  });
  };

   
    
     useEffect(() => {
          console.log("start call api")
    fetch(`${api}/cart/reserve/${id}`)
        .then((response) => {
            if(response.status === 200){
                console.log("SUCCESSS", response.json())
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
  
  return ( <div class="formPage">
        { errorMessage ? 
        (<div>errorMessage</div>)
     : (<div></div>)}
            <div class="form">
            <form onSubmit={e => { handleSubmit(e) }} >
        <div class="input-name">
            <label for="card_number">Card Number</label>
            <input type="text" id="card_number" name="card_number" onChange={(e) => {
                setcard_number(e.target.value)
            }}/>
</div>
<div class="input-email">
               <label for="name_on_card">Name on Card</label>
            <input type="text" id="name_on_card" name="name_on_card" onChange={(e) => {
                setname_on_card(e.target.value)
            }}/>

</div>

<div class="input-street">
            <label for="expiration_month">Expiration Month</label>
            <input type="text" id="expiration_month" name="expiration_month" onChange={(e) => {
                setexpiration_month(e.target.value)
            }}/>  
</div>



 <div class="half-row">
 <div class="input-city" >
     <label for="expiration_year">City</label>
            <input type="text" name="expiration_year" id="expiration_year" onChange={(e) => {
                setexpiration_year(e.target.value)
            }}/>
  </div>

   <div class="input-state">
            <label for="cvv">Cvv</label>
            <input type="text" name="cvv" id="cvv" onChange={(e) => {
                setcvv(e.target.value)
            }}/>
    </div>
 </div>

            <input class="submit-button" type="submit" value="Submit" />

        </form>
            </div>
        </div>
)
}

export default PaymentForm
