import React, { useState } from 'react'
import './App.scss'
import Header from '../senior-project-fe/user_components/header.tsx'
import TableUsers from '../senior-project-fe/user_components/TableUsers.tsx'
import Container from 'react-bootstrap/Container';
import AdminLoginPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminLoginPage.tsx'
import AdminRegisterPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminRegisterPage.tsx'
import ModalAddNew from '../senior-project-fe/user_components/ModalAddNew.tsx'
import { ToastContainer, toast } from 'react-toastify';
import LandingPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/LandingPage.tsx'
import Footer from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/Footer.tsx'
import { Outlet, Link, BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminDashboard from '../senior-project-fe/pages/AdminDashboard.tsx'
import StaffDashboard from '../senior-project-fe/pages/StaffDashboard.tsx'
import MemberDashboard from '../senior-project-fe/pages/MemberDashboard.tsx'
import PasswordValidation from '../senior-project-fe/helper/PasswordValidation.ts';
import MoviePage from '../senior-project-fe/pages/MoviePage.tsx'
import StudyRoomReservation from '../senior-project-fe/pages/studyRoom.tsx'
import StudyRoomIntroduction from '../senior-project-fe/pages/StudyRoomPage.tsx'


function App() {
  return (
    <div>
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
      {/* <div>
        <Header />
        <Outlet />
        <Footer />
      </div> */}
    </div>
  );
}

export default App
