import './App.css'
import LoginForm from './Views/Login'
import { Route, Routes } from 'react-router-dom';
import Cookies from 'js-cookie'
import { Outlet, Navigate } from 'react-router-dom'
import { UserProvider } from './Services/AuthContext'
import Dashboard from './Views/Dashboard';
import Vehicle from './Views/Vehicle';
import AddParentVisit from './Views/ParentVisit';
import StudentRecords from './Views/StudentRecords/Student';


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
                        <Route path="/" element={<h1>Home</h1>} />
                        <Route path="/login" element={<LoginForm />} />

                        <Route element={<PrivateRoutes />}>
                            <Route path="/dashboard" element={<Dashboard />} />

                            <Route path="/vehicle/add-vehicle" element={<Vehicle />} />
                            <Route path="/vehicle/records" element={<Vehicle />} />

                            <Route path="/add-parent-visit" element={<AddParentVisit />} />

                            <Route path='/student-records' element={<StudentRecords />} />
                        </Route>
                    </Routes>
                </div>
            </UserProvider>
        </>
    )
}

export default App
