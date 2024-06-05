import './App.css'
import LoginForm from './Views/Login'
import QrCode from './Views/QrCode'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import FaceScan from './Views/FaceScan';
import QrScan from './Views/QrScan';
import 'bootstrap/dist/css/bootstrap.min.css';
import GridExample from './Views/ParentVisit/List';
import Visitors from './Views/Visitors';
import RecordsDashBoard from './Views/Records';
import TempPass from './Views/Visitors/TempPass';
import StudentRecords from './Views/Records/Student';

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
                <Route path='/parent-list' element={<GridExample />} />
                <Route path='/parent-list/:id' element={<GridExample />} />

                {/* general visitors */}
                <Route path='/add-visitor' element={<Visitors />} />
                <Route path='/current-visitor-list' element={<Visitors />} />
                <Route path='/visitor-pass' element={<TempPass />} />

                <Route path='/records' element={<RecordsDashBoard />} />
                <Route path='/records/student' element={<StudentRecords />}  ></Route>

                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
