import './App.css'
import LoginForm from './Views/Login'
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Outlet, Navigate } from 'react-router-dom'
import { UserProvider } from './Services/AuthContext'
import Dashboard from './Views/Dashboard';
import Student from './Views/Student';


const PrivateRoutes = () => {
    // const token = Cookies.get('token') || "";
    const token = "faas"
    if (token) {
        return <Outlet />
    }
    else {
        return <Navigate to='/login' />
    }
}

function App() {
    return (
        <>
            <UserProvider>
                <div className="App h-screen">
                    <Routes>
                        <Route path="/" element={<LoginForm />} />
                        <Route path="/login" element={<LoginForm />} />

                        {/* <Route element={<PrivateRoutes />}> */}
                            <Route path="/dashboard" element={<Dashboard />} />
                            
                            <Route path='/add-student' element={<Student />} />
                            <Route path='/add-batch' element={<Student />} />
                            <Route path='/delete-student' element={<Student />} />

                        {/* </Route> */}
                            <Route path='*' element={<h1>Not Found</h1>} />
                    </Routes>
                </div>
            </UserProvider>
        </>
    )
}

export default App
