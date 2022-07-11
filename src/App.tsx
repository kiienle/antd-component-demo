import React from "react";
import "./App.less";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./component/login/login";
import HomeComponent from "./component/Home/Home2";
import Profile from "./Pages/Profile/Profile";
import Buttons from "./Pages/Buttons/Buttons";
import Dasboard from "./Pages/Dashboard/dashboard";
import Cards from "./Pages/Cards/Cards";
import Notifications from "./Pages/Notifys/Notifications";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeComponent />}>
                    <Route path="/dashboard" element={<Dasboard />} />
                    <Route path="/components">
                        <Route path="buttons" element={<Buttons />} />
                        <Route path="cards" element={<Cards />} />
                        <Route
                            path="notifications"
                            element={<Notifications />}
                        />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                </Route>
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
