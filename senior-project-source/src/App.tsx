import React, { useState } from 'react'
import './App.scss'
import Header from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/header.tsx'
import TableUsers from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/TableUsers.tsx'
import Container from 'react-bootstrap/Container';
import AdminLoginPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminLoginPage.tsx'
import AdminRegisterPage from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/pages/AdminRegisterPage.tsx'
import ModalAddNew from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-fe/components/ModalAddNew.tsx'


function App() {
  const [isShownModalAddNew, setIsShownModalAddNew] = useState(false);
  const handleClose = () => {
    setIsShownModalAddNew(false);
  }
  return (
    <div className="app-container">
      <Header />
      <Container>
        <div className="my-3 add-new">
          <span>
            <b>List User:</b>
          </span>
          <button className="btn btn-primary" onClick={() => setIsShownModalAddNew(true)}>Add new user</button>
        </div>
        <TableUsers />
      </Container>
      <ModalAddNew show={isShownModalAddNew} handleClose={handleClose} />
    </div>
  )
}

export default App
