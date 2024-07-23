import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VerificationDone from "./components/verified";
import Home from "./components/Home";
import ScanReceipt from "./components/scan";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/verified" element={<VerificationDone />} />
                <Route path="/scan" element={<ScanReceipt />} />
            </Routes>
        </Router>
    );
}

export default App;
