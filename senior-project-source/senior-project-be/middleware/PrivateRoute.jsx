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
      console.log("check what is inside cookie: ", document.cookie)
      let response = await axios.post('http://localhost:3000/verifyToken', { data: { token: token } });
      const retrievedRoleID = response.data.roleID;
      console.log(">>>retrieved roled ID: ", retrievedRoleID);
      console.log(">>>role ID requested: ", roleID);
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
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;