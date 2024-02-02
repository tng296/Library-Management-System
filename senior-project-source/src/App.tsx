import React, { useState } from 'react'
import './App.scss'
import Header from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/header.tsx'
import TableUsers from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/TableUsers.tsx'
import Container from 'react-bootstrap/Container';
import AdminLoginPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminLoginPage.tsx'
import AdminRegisterPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminRegisterPage.tsx'
import ModalAddNew from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/ModalAddNew.tsx'
import { ToastContainer, toast } from 'react-toastify';


function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Container>
          <TableUsers />
        </Container>
      </div>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App
