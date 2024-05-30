import './App.css'
import LoginForm from './Views/Login'
import QrCode from './Views/QrCode'
import { Route, Routes } from 'react-router-dom';
import QrReader from './Views/ReadQR'
import WebcamDemo from './Views/FaceDetection';
import Dashboard from './Views/Dashboard';


// react router 

function App() {
    return (
        <div className="App h-screen">
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/qr-code' element={<QrCode />} />
                <Route path='/qr-reader' element={<QrReader />} />
                <Route path='/face-detection' element={<WebcamDemo />} />
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
