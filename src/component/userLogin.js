import "../styles/userlogin.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  let [email,setEmail] = useState('')
  let [password,setPassword] = useState('')
  let navigate = useNavigate()

  let handleSubmit = () =>{
    if((email == "user@gmail.com") && (password == 1234)){
      navigate("/user-portal")
    }else{
      alert("invalid username or password")
    }
  }
    return ( 
        <div className="userlogin">
            <div className="usr-nav">
        <Link className="usr-home-link" to="/">
          Home
        </Link>
      </div>
      <div className="usr-login">
        <h1>USER LOGIN</h1>
        <form className="adm-form" action="" onSubmit={handleSubmit}>
          <label htmlFor="">EMAIL</label>
          <br />
          <input type="email" placeholder="email" value={email} onChange={(e)=>setEmail(e.target.value)}/> <br />
          <label htmlFor="">Password</label>
          <br />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          <div className="adm-btns">
            <button>LOG IN</button>
        </div>
        
        </form>
      </div>
        </div>
     );
}
 
export default UserLogin;