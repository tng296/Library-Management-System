import './App.scss'
import Header from '../senior-project-fe/user_components/header.tsx';
import StudyRoom from '../senior-project-fe/room_components/Studyroom.tsx';
import TableUsers from '../senior-project-fe/user_components/TableUsers.tsx';
import TableBook from '../senior-project-fe/book_components/TableBook.tsx';
import LandingPage from '../senior-project-fe/pages/LandingPage.tsx';
import AdminLoginPage from '../senior-project-fe/pages/AdminLoginPage.tsx';
import AdminDashboard from '../senior-project-fe/pages/AdminDashboard.tsx';
import MemberDashboard from '../senior-project-fe/pages/MemberDashboard.tsx';
import StaffDashboard from '../senior-project-fe/pages/StaffDashboard.tsx';
import SearchBookPage from '../senior-project-fe/pages/BookSearch.tsx'
import Footer from '../senior-project-fe/user_components/Footer.tsx';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from '/Users/vincentnguyen/Developer/Senior-Project/senior-project-source/senior-project-be/middleware/PrivateRoute.jsx';

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

function App() {
  const customRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />}></Route>
        <Route element={<PageLayout />}>
          <Route path="/booklist" element={<TableBook />}></Route>
          <Route path="/login" element={<AdminLoginPage />}></Route>
          <Route path="/admindashboard" element={<PrivateRoute roleID={1}><AdminDashboard /></PrivateRoute>} />
          <Route path="/memberdashboard" element={<PrivateRoute roleID={1}><MemberDashboard /></PrivateRoute>} />
          <Route path="/memberlist" element={<PrivateRoute roleID={1}><TableUsers /></PrivateRoute>} />
          <Route path="/staffdashboard" element={<StaffDashboard />}></Route>
          <Route path="/studyroom" element={<StudyRoom />}></Route>
          <Route path="/booksearch" element={<SearchBookPage />}></Route>
          <Route path="*" element={<p>Page under construction</p>} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={customRouter}>
        <ToastContainer
          position="bottom-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </RouterProvider>
    </div>
  );
}

export default App;