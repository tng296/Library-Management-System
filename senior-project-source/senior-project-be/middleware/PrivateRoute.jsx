import { Route, Navigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRoleID = async () => {
      const token = document.cookie.split('=')[1];
      console.log(">>>check token:", token)
      let response = await axios.post('http://localhost:3000/verifyToken', { data: { token: token } });
      console.log(">>>check response: ", response.data)
      const roleID = response.data.roleID;
      console.log(">>roleID: ", roleID);
      if (roleID === rest.roleID) {
        setAuthenticated(true);
      } else {
        setAuthenticated(false);
      }
      setLoading(false);
    };

    fetchRoleID();
  }, [rest.roleID]);

  if (loading) {
    return <div>Forbidden...</div>;
  }

  if (error) {
    console.error("Error:", error);
    return <Navigate to="/login" />;
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Route {...rest} element={<Element />} />;
};

export default PrivateRoute;
