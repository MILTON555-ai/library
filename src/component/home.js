import { Link } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
    return (
        <div className="home">
            <div className="login">
            <h1>LIBRARY</h1>
                <div className="home-btn">
                    <Link to="/admin-login">
                        <button>Admin</button>
                    </Link>
                    <br />
                    <Link to="/user-login">
                        <button>User</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
