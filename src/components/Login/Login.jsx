import React, { useContext } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const Login = () => {
    const { loginUser, setUser } = useContext(AuthContext);

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                console.log(result.user);
                setUser(result.user);
                e.target.reset();
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            <div className="form-container">
                <form onSubmit={handleLogIn} action="">
                    <h1>Login</h1>
                    <div className="form-control">
                        <label htmlFor="">Email</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="">Password</label>
                        <input type="password" name="password" />
                    </div>

                    <input
                        className="submit-btn"
                        type="submit"
                        name=""
                        value="Log In"
                    />
                    <div className="form-footer-text">
                        <p>
                            New to Ema-john?{" "}
                            <Link to="/signup">Create New Account</Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
