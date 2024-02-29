import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLoginPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminLoginPage.tsx'
import AdminRegisterPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminRegisterPage.tsx'
import LandingPage from '../senior-project-fe/pages/LandingPage.tsx';
import TableBook from '../senior-project-fe/book_components/TableBook.tsx';
import TableUser from '../senior-project-fe/user_components/TableUsers.tsx';
import PassportPage from '../senior-project-fe/pages/PassportPage.tsx';
import StudyRoomIntroduction from '../senior-project-fe/pages/StudyRoomPage.tsx';
import AdminDashboard from '../senior-project-fe/pages/AdminDashboard.tsx';
import MemberIntroPage from '../senior-project-fe/pages/MemberIntroPage.tsx';
import SearchBookPage from '../senior-project-fe/pages/BookSearch.tsx';
import MovieSearch from '../senior-project-fe/pages/MoviePage.tsx';
import StaffDashboard from '../senior-project-fe/pages/StaffDashboard.tsx';
import MemberDashboard from '../senior-project-fe/pages/MemberDashboard.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
