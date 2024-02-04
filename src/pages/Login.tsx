import React, { useState } from "react";
import { Link } from "react-router-dom";


const Login: React.FC = () => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        const {name, value}  = event.target
        setFormData(prevState => (
            {...prevState,
            [name]: value}
        ))
    }

    return (
        <div className="login-page">
            <div className="login-page-content">
                <h1>Sign in to your account</h1>
                <form>
                    <div className="inputs">
                        <input
                            type="text"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="email"
                        />
                        <input
                            type="text"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="password"
                        />
                    </div>
                    <button className="login-button">Sign in</button>
                </form>
                <span>Don’t have an account? 
                    <Link to="signup" className="signup-link">Create one now</Link>
                </span>
            </div>
        </div>
    )
}

export default Login;