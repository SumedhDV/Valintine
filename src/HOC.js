// import React, { Component } from 'react'
// import Login from './AJ/Login'

// const HOC = (Comp) => {
//   return class NewComp extends Component{
//     constructor(props){
//       super(props)
//       this.state={
//         login:true,
    
//       }
//     }
//    render(){
//     return(this.state.login) ? <Comp/> : <Login/>
    
    
//    }
//   }

// }

// export default HOC


// 


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./AJ/Login"; // Ensure correct path

const HOC = (Comp) => {
  return function AuthenticatedComponent(props) {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(
      localStorage.getItem("isAuthenticated") === "true"
    );

    useEffect(() => {
      const checkAuth = () => {
        const authStatus = localStorage.getItem("isAuthenticated") === "true";
        setIsAuthenticated(authStatus);
      };

      // Listen for auth changes
      window.addEventListener("storage", checkAuth);

      // ✅ Clear localStorage when tab is closed or refreshed
      const clearAuthOnClose = () => {
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("user"); // Remove user info
      };
      window.addEventListener("beforeunload", clearAuthOnClose);

      return () => {
        window.removeEventListener("storage", checkAuth);
        window.removeEventListener("beforeunload", clearAuthOnClose);
      };
    }, []);

    if (!isAuthenticated) {
      return( <div className="container p-5" id="authLogin">
        <Login />
        </div>

      );
    }

    return <Comp {...props} />;
  };
};

export default HOC;
