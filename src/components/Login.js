import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    let navigate = useNavigate();

    const host = process.env.REACT_APP_API_URL;

    const [credentials, setCredentials] = useState({ email: "", password: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        // console.log(json);

        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            navigate("/");
            props.showAlert("Logged In Successfully", "success");

        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    };

    return (
        <div className="container">
            <form
                className="mt-4 w-75 mx-auto border border-opacity-75 border-3 p-5"
                onSubmit={handleSubmit}
            >
                <h2 className="mb-3">Login</h2>
                <div className="my-3">
                    <label htmlFor="email" className="form-label">
                        Email address
                    </label>
                    <input
                        type="email"
                        className="form-control"
                        value={credentials.email}
                        name="email"
                        id="email"
                        onChange={onChange}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        value={credentials.password}
                        name="password"
                        id="password"
                        onChange={onChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Login;
