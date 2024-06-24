import './App.css'
import LoginForm from './Views/Login'
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Navigate, Outlet } from 'react-router-dom'
import ResetPasssword from './Views/ResetPassword';
import Dashboard from './Views/Dashboard';
import GuardScheduler from './Views/AddSchedule';

// react router 

const PrivateRoutes = () => {
    const token = Cookies.get('token')
    if (token) {
        return <Outlet />
    }
    else {
        alert('Please login to access this page');
        return <Navigate to='/login' />
    }
}

function App() {
    return (
        <div className="App h-screen">
            <Routes>

                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='/reset-password' element={<ResetPasssword />} />

                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/schedule-visit' element={<GuardScheduler />} />
                <Route element={<PrivateRoutes />}>
                </Route>
                {/* not found */}
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
