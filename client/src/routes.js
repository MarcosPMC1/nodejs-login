import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from './screens/Login/Login'
import { Home } from './screens/Home/Home'


export function AppRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
            </Routes>
        </Router>
    );
}
