import { Route, Navigate, useLocation } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrivateRoute = ({ children, roleID }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const fetchRoleID = async () => {
      const token = document.cookie.split('=')[1];
      const cleanToken = token.replace("; _xsrf", '');
      console.log(">>>check req token: ", cleanToken);
      console.log(">>>check req roldID: ", roleID);
      let response = await axios.post('http://localhost:3000/verifyToken', { data: { token: cleanToken } });
      const retrievedRoleID = response.data.roleID;
      console.log(">>>check res roldID: ", retrievedRoleID);
      if (roleID.includes(retrievedRoleID)) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    };

    fetchRoleID();
  }, [roleID]);

  if (loading) {
    return <div>Forbidden...</div>;
  }

  if (!authenticated) {
    alert("You are not authorized to access this page!");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;