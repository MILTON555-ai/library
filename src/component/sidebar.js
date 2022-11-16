import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const SideBar = (props) => {
  return (
    <div className="sidebar">
      <div className="user">
        <div className="image">
          <img
            src="https://www.transparentpng.com/thumb/user/blue-male-user-profile-transparent-png-2lbgMx.png"
            alt=""
          />
        </div>
        <div className="userName">
          <p>Admin</p>
          <p>{props.data}</p>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/admin-portal/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/admin-portal/book-list" className="link">
              Book List
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/admin-portal/user-list" className="link">
              User List
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/admin-portal/add-books" className="link">
              Add Book
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/admin-portal/add-users" className="link">
              Add User
            </Link>
          </li>
        </ul>
      </div>
      <div className="logout1">
        <button  >Logout</button>
      </div>
    </div>
  );
};

export default SideBar;
