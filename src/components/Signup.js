import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    let navigate = useNavigate();

    const host = "http://localhost:5000";

    const [credentials, setCredentials] = useState({name:"", email: "", password: "",  cpassword: "" });
    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/createuser`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: credentials.name,
                email: credentials.email,
                password: credentials.password,
            }),
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem("token", json.authToken);
            navigate("/");
            props.showAlert("Account Created Successfully", "success");
        } else {
            props.showAlert("Invalid Credentials", "danger");
        }
    };
    return (
        <div className="container">
            <form
                className="mt-4 w-50 mx-auto border border-opacity-75 border-3 p-5"
                onSubmit={handleSubmit}
            >
                <h2 className="mb-3">Signup</h2>
                <div className="my-3">
                    <label htmlFor="name" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        value={credentials.name}
                        name="name"
                        id="name"
                        onChange={onChange}
                        required
                    />
                </div>
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
                        required
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
                        required
                        minLength={5}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cpassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        value={credentials.cpassword}
                        name="cpassword"
                        id="cpassword"
                        onChange={onChange}
                        required
                        minLength={5}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Signup;
