import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import BoltLoaderComponent from './LoadingComponent'
const Receipt = () => {
    const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [alldata, setAllData] = useState({});
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
    fetch(`https://fe-test.marketing4storage.com/cart/submit-reservation`)
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
            setisLoading(false)

          return response.json();
        } else if (response.status === 408) {
          console.log("SOMETHING WENT WRONG");
          setrequestFailed(true);
        }
      }).then((e) => {
        setAllData(e);
        

        console.log("DATA STORED", e);
      })
      
  }, []);

  return (
      <div style={{margin: '0 auto', display:'flex', justifyContent:'center', alignItems:'center'}}>
      { !isLoading ? (
    <div className="formPage">
      {errorMessage ? <div>errorMessage</div> : <div></div>}
      <div style={{margin: '0 auto', width: 400, height: 600, borderRadius: 6, display: 'flex', justifyContent:'start', flexDirection: 'column', padding: 20, boxShadow: '0.5px 0.4px 0.4px 0.8px grey'}}>
         <code style={{marginTop: 10}}>{alldata.paid_today}</code>
         <code>Here's your receipt! </code>
         {/* <code style={{marginTop: 10}}>Payment Id: {alldata.payment_id}</code> */}
         <br/>
         <code><b>Tenant Information</b></code>
         <code>{alldata.tenant.name}</code>
         <code>{alldata.tenant.email}</code>
         <code>{alldata.tenant.street}</code>
         <code>{alldata.tenant.city}</code>
         <code>{alldata.tenant.state}</code>
         <code>{alldata.tenant.zip_code}</code>
         <br/><br/>
         <code><b>Unit Information</b></code>
         <code>description: {alldata.unit.description}</code>
         <code>floor: {alldata.unit.floor}</code>
         <code>area: {alldata.unit.area}</code>
         <code>inside:{alldata.unit.inside}</code>
         <code>width:{alldata.unit.width}ft</code>
         <code>length:{alldata.unit.length}ft</code>
         <code>rate:{alldata.unit.rate}%</code>
         <br/><br/>

      </div>
    </div>) : (<div ><BoltLoaderComponent /></div>)}
    </div>
  );
};

export default Receipt;
