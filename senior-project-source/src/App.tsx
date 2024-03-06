import './App.scss'
import Header from '../senior-project-fe/user_components/header.tsx'
import TableUsers from '../senior-project-fe/user_components/TableUsers.tsx'
import Container from 'react-bootstrap/Container';
import TableBook from '../senior-project-fe/book_components/TableBook.tsx'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<TableBook />}></Route>
      </Route>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={router} />
      <ToastContainer position="bottom-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover />
    </div>
  );
}

export default App
