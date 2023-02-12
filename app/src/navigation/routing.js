import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import Login from "../pages/login/Login"
import NotFound from "../pages/error/NotFound";
import Register from "../pages/register/Register"
import Forget from "../pages/login/Forget";
import Facilities from "../pages/facilities/Facilities";
import Exercise from "../pages/exercise/Exercise";
import Verify from "../pages/register/Verify";

function Routing() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route path="facilities" index element={<Facilities/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="register" element={<Register/>}>
                    <Route path="otp" element={<Verify/>}/>
                </Route>
                <Route path="password">
                    <Route path="forget" element={<Forget/>}/>
                </Route>
                <Route path="exercises" element={<Exercise/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
    )
}

export default Routing;