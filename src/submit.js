import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

const Submit = () => {
    const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  const [requestFailed, setrequestFailed] = useState(null);
  const id = "528560dc-0507-4db9-94f9-f1afa80d0e07";

  const api = `https://fe-test.marketing4storage.com`;
  const [card_number, setcard_number] = useState("");
  const [name_on_card, setname_on_card] = useState("");
  const [expiration_month, setexpiration_month] = useState("");
  const [expiration_year, setexpiration_year] = useState("");
  const [cvv, setcvv] = useState("");
  //     Must be 2023 to 2030.
  const [errorMessage, setErrorMessage] = useState("");

  // ○ cvv - card 3-digit security code. You can use any 3 digit number for testing.
  // ○ You will post this to the backend endpoint using content type
  // “application/x-www-form-urlencoded”. The url is
  // https://fe-test.marketing4storage.com/cart/payment
  const options = {
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
  };
  const handleSubmit = (e) => {
    navigate("/cart/receipt");
  };

  useEffect(() => {
    console.log("start call api");
    fetch(`${api}/cart/reserve/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
          setrequestFailed(true);
        }
      })
      .then((e) => {
        setData(e.response);
        console.log("DATA STORED");
      })
      .catch((error) => {
        setrequestFailed(true);
      });
  }, []);

  return (
    <div className="formPage">
      {errorMessage ? <div>errorMessage</div> : <div></div>}
      <div style={{margin: '0 auto', width: 400, height: 100, borderRadius: 6, display: 'flex', justifyContent:'center', alignItems: 'center', flexDirection: 'column', padding: 20, boxShadow: '0.5px 0.4px 0.4px 0.8px grey'}}>
         <code>Complete your reservation!</code>
         <button 
         onClick={() => {
            handleSubmit()
         }}
         style={{padding: 10, borderRadius: 6, backgroundColor: "grey", width: '40%', marginTop: 15, color: "white"}}>Submit</button>
      </div>
    </div>
  );
};

export default Submit;
