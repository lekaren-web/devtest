
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TenantForm from "./tenantForm"
import CardPayment from "./cardPayment"
const App = () => {
    return (
      <Router>
        <Routes>
          
          <Route path="/" element={<TenantForm />} />
          <Route path="/payment" element={<CardPayment />} />
          
        </Routes>
      </Router>

    );
};

export default App;
