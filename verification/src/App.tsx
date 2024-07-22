import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerificationDone from "./components/verified";
import Home from "./components/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/verified" element={<VerificationDone />} />
            </Routes>
        </Router>
    );
}

export default App;
