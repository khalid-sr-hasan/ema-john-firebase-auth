import React, { useContext } from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Header = () => {
    const { user, logOutUser } = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOutUser()
            .then(() => {})
            .catch((error) => console.error(error));
    };

    return (
        <nav className="header">
            <img src={logo} alt="" />
            <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign Up</Link>

                {user ? (
                    <div style={{ display: "flex", gap: "10px" }}>
                        <button onClick={handleLogOut}>Log Out</button>
                        <p>{user?.email}</p>
                    </div>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </div>
        </nav>
    );
};

export default Header;
