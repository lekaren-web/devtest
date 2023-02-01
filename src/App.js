
import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import TenantForm from "./tenantForm"
import CardPayment from "./cardPayment"
import Submit from './submit'
import Receipt from './receipt'
const App = () => {
    return (
      <Router>
        <Routes>
          
          <Route path="/" element={<TenantForm />} />
          <Route path="/cart/payment" element={<CardPayment />} />
          <Route path="/cart/submit-reservation" element={<Submit />} />
          <Route path="/cart/receipt" element={<Receipt />} />
          
        </Routes>
      </Router>

    );
};

export default App;
