import './App.scss'
import Header from '../lms-fe/user_components/Header.tsx';
import StudyRoom from '../lms-fe/room_components/Studyroom.tsx';
import TableUsers from '../lms-fe/user_components/TableUsers.tsx';
import TableBook from '../lms-fe/book_components/TableBook.tsx';
import LandingPage from '../lms-fe/pages/LandingPage.tsx';
import AdminLoginPage from '../lms-fe/pages/AdminLoginPage.tsx';
import AdminDashboard from '../lms-fe/pages/AdminDashboard.tsx';
import MemberDashboard from '../lms-fe/pages/MemberDashboard.tsx';
import StaffDashboard from '../lms-fe/pages/StaffDashboard.tsx';
import SearchBookPage from '../lms-fe/pages/BookSearch.tsx'
import MemberIntroPage from '../lms-fe/pages/MemberIntroPage.tsx';
import MoviePage from '../lms-fe/pages/MoviePage.tsx';
import PersonalInfo from '../lms-fe/pages/PersonalInfo.tsx';
import PassportPage from '../lms-fe/pages/PassportPage.tsx';
import SimpleBookSearch from '../lms-fe/pages/SimpleBookSearch.tsx';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from '/Users/vincentnguyen/Developer/Senior-Project/lms-source/lms-be/middleware/PrivateRoute.jsx';

const PageLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

function App() {
  const customRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<LandingPage />}></Route>
        <Route path="/login" element={<AdminLoginPage />}></Route>
        <Route element={<PageLayout />}>
          <Route path="/member-introduction" element={<MemberIntroPage />}></Route>
          <Route path="/simplesearch" element={<SimpleBookSearch />}></Route>
          <Route path="/passport" element={<PassportPage />}></Route>
          <Route path="/booklist" element={<PrivateRoute roleID={[1, 2]}><TableBook /></PrivateRoute>} />
          <Route path="/admindashboard" element={<PrivateRoute roleID={[1]}><AdminDashboard /></PrivateRoute>} />
          <Route path="/memberdashboard" element={<PrivateRoute roleID={[3]}><MemberDashboard /></PrivateRoute>} />
          <Route path="/memberlist" element={<PrivateRoute roleID={[1, 2]}><TableUsers /></PrivateRoute>} />
          <Route path="/staffdashboard" element={<PrivateRoute roleID={[2]}><StaffDashboard /></PrivateRoute>} />
          <Route path="/studyroom" element={<PrivateRoute roleID={[1, 2]}><StudyRoom /></PrivateRoute>} />
          <Route path="/booksearch" element={<PrivateRoute roleID={[1, 2, 3]}><SearchBookPage /></PrivateRoute>} />
          <Route path="/personal-info" element={<PrivateRoute roleID={[1, 2, 3]}><PersonalInfo /></PrivateRoute>} />
          <Route path='/movie' element={<MoviePage />} />
          <Route path="*" element={<p>Page under construction</p>} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="app-container">
      <RouterProvider router={customRouter} />
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
    </div>
  );
}

export default App;