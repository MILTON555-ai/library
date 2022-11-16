import { Routes, Route } from "react-router-dom";
import UserSideBar from "./usersidebar";
import AdminHome from "./adminHome";
import BookList from "./bookList";
import '../styles/userportal.css'


const UserPortal = () => {
    return ( 
        <div className="userportal">
             <div className="left">
        <UserSideBar />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/book-list" element={<BookList />} />
        </Routes>
      </div>
        </div>
     );
}
 
export default UserPortal;