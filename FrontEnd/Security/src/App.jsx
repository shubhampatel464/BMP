import './App.css'
import LoginForm from './Views/Login'
import QrCode from './Views/QrCode'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import FaceScan from './Views/FaceScan';
import QrScan from './Views/QrScan';
import 'bootstrap/dist/css/bootstrap.min.css';


// react router 

function App() {
    return (
        <div className="App h-screen">
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/qr-code' element={<QrCode />} />
                <Route path='/qr-reader' element={<QrScan />} />
                <Route path='/face-detection' element={<FaceScan />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
