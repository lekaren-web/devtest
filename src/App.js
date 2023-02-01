
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, 
    Route} from "react-router-dom";
import TenantForm from "./tenantForm"
const App = () => {
    
    return (
        
      <Router>
        <Routes>
          
          <Route exact path="/" component={TenantForm} />
          
        </Routes>
      </Router>

    );
};

export default App;
