import React, { useEffect, useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";
import BoltLoaderComponent from "./LoadingComponent"
const TenantForm = () => {
  const navigate = useNavigate();
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState([]);
  const [requestFailed, setrequestFailed] = useState(false);
  const id = "528560dc-0507-4db9-94f9-f1afa80d0e07";

  const api = `https://fe-test.marketing4storage.com`;
  const [name, setName] = useState(null);
  const [street, setStreet] = useState(null);
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);
  const [zip_code, setZipCode] = useState(null);
  const [email, setEmail] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
    },
    body: data,
  };
  const handleSubmit = (e) => {
    var details = {
      email,
      name,
      zip_code,
      state,
      city,
      street,
    };

    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    try {
      fetch(`${api}/cart/tenant`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
        },
        body: formBody,
      }).then((response) => {
        if (response.status === 200) {
          alert("SUCCESSS");
            navigate("/cart/payment")
          return response.json();
        } else if (response.status != 200) {
          alert("SOMETHING WENT WRONG");

          setrequestFailed(true);
          return

        }
      })
      
    } catch (e) {
      alert(e);
    }

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
      
      {errorMessage ? <div>{{ errorMessage }}</div> : <div></div>}
      { !isLoading ? (

      <div className="form">
      <code>Tenant Form</code>
        <form
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div className="input-name">
            <label htmlFor="name">Name</label>
            <input
            required

              type="text"
              id="name"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="input-email">
            <label htmlFor="email">Email</label>
            <input
            required
              type="text"
              id="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div className="input-street">
            <label htmlFor="street">Street</label>
            <input
            required
              type="text"
              id="street"
              name="street"
              onChange={(e) => {
                setStreet(e.target.value);
              }}
            />
          </div>

          <div className="half-row">
            <div className="input-city">
              <label htmlFor="city">City</label>
              <input
              required
                type="text"
                name="city"
                id="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              />
            </div>

            <div className="input-state">
              <label htmlFor="state">State</label>
              <input
              required
                type="text"
                name="state"
                id="state"
                onChange={(e) => {
                  setState(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="half-row-zip">
            <div>
              <label htmlFor="zipcode">Zipcode</label>
              <input
              required
                type="text"
                name="zipcode"
                id="zipcode"
                onChange={(e) => {
                  setZipCode(e.target.value);
                }}
              />
            </div>

            <div></div>
          </div>

          <input
          required className="submit-button" type="submit" value="Submit" />
        </form>
      </div>):(<BoltLoaderComponent />)}
    </div>
  );
};

export default TenantForm;
