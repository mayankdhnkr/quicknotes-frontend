import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import UserDetail from "./components/UserDetail";

function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type: type,
        });
        setTimeout(() => {
            setAlert(null);
        }, 3000);
    };
    return (
        <div>
            <NoteState>
                <Router>
                    <Navbar />
                    <div className="container">
                        <Alert alert={alert} />
                        <Routes>
                            <Route exact path="/" element={<Home showAlert={showAlert} />} />
                            <Route exact path="/about" element={<About />} />
                            <Route exact path="/login" element={<Login showAlert={showAlert}/>} />
                            <Route exact path="/signup" element={<Signup showAlert={showAlert}/>} />
                            <Route exact path="/userdetail" element={<UserDetail/>} />
                        </Routes>
                    </div>
                </Router>
            </NoteState>
        </div>
    );
}

export default App;
