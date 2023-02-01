import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import BoltLoaderComponent from "./LoadingComponent"
const PaymentForm = () => {
    const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [alldata, setAllData] = useState(null);
  const [requestFailed, setrequestFailed] = useState(null);
  const id = "528560dc-0507-4db9-94f9-f1afa80d0e07";
  const [isLoading, setisLoading] = useState(true);
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
    var details = {
      card_number,
      name_on_card,
      expiration_month,
      expiration_year,
      cvv,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
      fetch(`${api}/cart/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      })
      fetch(`${api}/cart/submit-reservation`, {
        method: "GET",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        
      })
      .then((response) => {
        if (response.status === 200) {
            setAllData(response.data)
          alert("SUCCESSSFULLY ADDED PAYMENT METHOD");
          navigate("/cart/submit-reservation");
          return response.json();
        } else if (response.status != 200) {
          alert("SOMETHING WENT WRONG");
          setrequestFailed(true);
          return

        }
      })

    e.preventDefault();
    // setData(e.target.value)
  };

  useEffect(() => {
    console.log("start call api");
    fetch(`${api}/cart/reserve/${id}`)
      .then((response) => {
        if (response.status === 200) {
          console.log("SUCCESSS");
          setisLoading(false)
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
    <div className="formPage" style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {errorMessage ? <div>errorMessage</div> : <div></div>}
      {!isLoading ? (<div className="form">
          <code>Payment Form</code>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-name">
            <label htmlFor="card_number">Card Number</label>
            <input
              required
              type="text"
              id="card_number"
              name="card_number"
              onChange={(e) => {
                setcard_number(e.target.value);
              }}
            />
          </div>
          <div className="input-email">
            <label htmlFor="name_on_card">Name on Card</label>
            <input
            required
              type="text"
              id="name_on_card"
              name="name_on_card"
              onChange={(e) => {
                setname_on_card(e.target.value);
              }}
            />
          </div>

          <div className="input-street">
            <label htmlFor="expiration_month">Expiration Month</label>
            <input
            required
              type="text"
              id="expiration_month"
              name="expiration_month"
              onChange={(e) => {
                setexpiration_month(e.target.value);
              }}
            />
          </div>

          <div className="half-row">
            <div className="input-city">
              <label htmlFor="expiration_year">Expiration Year</label>
              <input
              required

                type="text"
                name="expiration_year"
                id="expiration_year"
                onChange={(e) => {
                  setexpiration_year(e.target.value);
                }}
              />
            </div>

            <div className="input-state">
              <label htmlFor="cvv">Cvv</label>
              <input
              required
                type="text"
                name="cvv"
                id="cvv"
                onChange={(e) => {
                
                    setcvv(e.target.value);
                
                }}
              />
            </div>
          </div>

          <input
          required className="submit-button" type="submit" value="Submit" />
        </form>
      </div>):(<BoltLoaderComponent />)}
    </div>
  );
};

export default PaymentForm;
