import SideBar from "./sidebar";
import "../styles/adminportal.css";
import { Route, Routes } from "react-router-dom";
import AdminHome from "./adminHome";
import BookList from "./bookList";
import UserList from "./userList";
import AddUser from "./addUsers";
import AddBook from "./addBooks";

const AdminPortal = (props) => {
  let email = props.data;
  return (
    <div className="adminportal">
      <div className="left">
        <SideBar data={email} />
      </div>
      <div className="right">
        <Routes>
          <Route path="/" element={<AdminHome />} />
          <Route path="/book-list" element={<BookList />} />
          <Route path="/user-list" element={<UserList />} />
          <Route path="/add-books" element={<AddBook />} />
          <Route path="/add-users" element={<AddUser />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminPortal;
