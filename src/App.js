
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './component/home';
import AdminLogin from './component/adminLogin';
import UserLogin from './component/userLogin';
import AdminPortal from './component/adminPortal';
import BookList from './component/bookList';
import UserPortal from './component/userPortal';

function App() {
  let email = "admin@gmail.com"
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home />}/>
        <Route path="/admin-login" element = {<AdminLogin data={email}/>}/>
        <Route path="/user-login" element = {<UserLogin />} />
        <Route path="/admin-portal/*" element= {<AdminPortal data={email} />}/>
        <Route path="/user-portal/*" element={<UserPortal />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
