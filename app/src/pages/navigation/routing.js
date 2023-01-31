import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from "./navbar/Navbar";
import App from "../App";
import Login from "../login/Login"
import ErrorPage from "../error/ErrorPage";

function Routing() {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Navbar/>}>
                <Route index element={<App/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<ErrorPage/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
    )
}

export default Routing;