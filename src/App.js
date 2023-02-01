
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, 
    Route} from "react-router-dom";
import TenantForm from "./tenantForm"
const App = () => {
    
    return (
        
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={TenantForm} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
        </Routes>
      </Router>

    );
};

export default App;
