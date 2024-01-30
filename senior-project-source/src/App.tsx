import React from 'react'
import './App.scss'
import Header from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/header.tsx'
import TableUsers from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/TableUsers.tsx'
import Container from 'react-bootstrap/Container';
import AdminLoginPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminLoginPage.tsx'
import AdminRegisterPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminRegisterPage.tsx'

function App() {
  return (
    <div className="app-container">
      <Header />
      <AdminLoginPage />
    </div>
  )
}

export default App
