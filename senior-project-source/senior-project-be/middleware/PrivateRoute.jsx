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
      let response = await axios.post('http://localhost:3000/verifyToken', { data: { token: token } });
      const retrievedRoleID = response.data.roleID;
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