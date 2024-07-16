import React, { useContext, useState } from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../Auth/AuthProvider";

const SignUp = () => {
    const [passwordError, setPasswordError] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const { registerUser, setUser } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        console.log(email, password, confirmPassword);

        if (password === "") {
            setPasswordError("password requier");
            return;
        } else if (password.length < 6) {
            setPasswordError("password must be 6 character");
            return;
        } else {
            setPasswordError("");
        }
        if (password !== confirmPassword) {
            setConfirmPasswordError("password did not match");
            return;
        } else {
            setConfirmPasswordError("");
        }

        registerUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                // setUser(result.user);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return (
        <div>
            <div>
                <form onSubmit={handleSignUp} action="">
                    <div className="form-container">
                        <h1>Sign Up</h1>
                        <div className="form-control">
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" />
                        </div>
                        <div className="form-control">
                            <label htmlFor="">Password</label>
                            <input type="password" name="password" />
                        </div>
                        {passwordError && (
                            <p className="error">
                                <small>{passwordError}</small>
                            </p>
                        )}
                        <div className="form-control">
                            <label htmlFor="">Confirm Password</label>
                            <input type="password" name="confirmPassword" />
                        </div>
                        {confirmPasswordError && (
                            <p className="error">
                                <small>{confirmPasswordError}</small>
                            </p>
                        )}
                        <input
                            className="submit-btn"
                            type="submit"
                            name=""
                            value="Sign Up"
                        />
                        <div className="form-footer-text">
                            <p>
                                Already have an account?{" "}
                                <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
