import React from 'react';
import { Link } from "react-router-dom";
import "./Navabar.css";
import { useLogout } from '../../Hooks/useLogout'
import { useAuthContext } from '../../Hooks/useAuthContext'

function Navabar() {
    const { user } = useAuthContext();
    const { logout } = useLogout();
    const handleClick = () => {
        logout();
    };
    return (
        <nav>
            <h1>Tourism</h1>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/location">Location</Link>

                {user && (<div className="logout">
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Logout</button>
                </div>)}
                {!user && (<div className="menu">
                    <Link to="/login">Login</Link>
                    <Link to="/Reg">Register</Link>
                </div>)
                }
            </div>
        </nav>
    );
}

export default Navabar