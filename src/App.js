
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, 
    Route, Redirect,} from "react-router-dom";
import tenantForm from "./tenantForm"
const App = () => {
    
    return (
        
      <Router>
        <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={tenantForm} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
// //           <Route path="/about" component={About} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
//           <Route path="/contactus" component={ContactUs} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Routes>
      </Router>

    );
};

export default App;
