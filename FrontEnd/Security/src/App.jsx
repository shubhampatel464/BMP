import './App.css'
import LoginForm from './Views/Login'
import QrCode from './Views/QrCode'
import { Route, Routes } from 'react-router-dom'
import ReadQR from './Views/ReadQR'

// react router 

function App() {
    return (
        // <div className="App">
            <Routes>
                <Route path="/" element={<h1>Home</h1>} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='/qrcode' element={<QrCode />} />
                <Route path='/qr-reader' element={<ReadQR />} />
            </Routes>
        // </div>
    )
}

export default App
