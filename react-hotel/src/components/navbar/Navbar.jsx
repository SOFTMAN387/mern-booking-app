import "./navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";




const Navbar = () => {
  const navigate = useNavigate();
  const { user, dispatch } = useContext(AuthContext);
  //console.log(user[0].username);
  const handleLogOut = async () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="navbar">
      <div className="navContainer">

        <Link to="/" style={{ color: "inherit", textDecoration: "none", fontWeight: "bold" }}>Softman's Hotel</Link>

        {user ? <span>{user[0].username} <button className="navButton" onClick={handleLogOut}>LogOut</button></span> : (<div className="navItems">
          <button className="navButton" onClick={() => { navigate("/register") }}>Register</button>
          <button className="navButton" onClick={() => { navigate("/login") }}>Login</button>
        </div>)}

      </div>
    </div>
  )
}

export default Navbar