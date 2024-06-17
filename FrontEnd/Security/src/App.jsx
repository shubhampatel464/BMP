import './App.css'
import LoginForm from './Views/Login'
import QrCode from './Views/QrCode'
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Views/Dashboard';
import FaceScan from './Views/FaceScan';
import QrScan from './Views/QrScan';
import 'bootstrap/dist/css/bootstrap.min.css';
import Visitors from './Views/Visitors';
import RecordsDashBoard from './Views/Records';
import TempPass from './Views/Visitors/TempPass';
import StudentRecords from './Views/Records/Student';
import VisitorRecords from './Views/Records/Visitors';
import StaffRecords from './Views/Records/Staff';
import ParentListForToday from './Views/ParentVisit';
import ParentEntry from './Views/ParentVisit/ParentEntry';
import VisiorPassForTwo from './Components/VisitorPassForTwo';
import ParentTempPass from './Views/ParentVisit/ParentTempPass';
import ResetPasssword from './Views/ResetPassword';
import ParentRecords from './Views/Records/Parent';

// react router 

function App() {
    return (
        <div className="App h-screen">
            <Routes>
                {/* QR-code scanner for entry and exit */}
                <Route path="/" element={<LoginForm />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path='/reset-password' element={<ResetPasssword />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/qr-code' element={<QrCode />} />
                <Route path='/qr-reader' element={<QrScan />} />
                <Route path='/face-detection' element={<FaceScan />} />

                {/* general visitors */}
                <Route path='/add-visitor' element={<Visitors />} />
                <Route path='/current-visitor-list' element={<Visitors />} />
                <Route path='/visitor-pass' element={<TempPass />} />

                {/* parent */}
                <Route path='/parent/list-today' element={<ParentListForToday />} />
                <Route path='/parent/entry' element={<ParentEntry />} />
                <Route path='/parent/exit' element={<ParentEntry />} />
                <Route path='/parent-pass' element={<ParentTempPass />} />

                {/* records */}
                <Route path='/records' element={<RecordsDashBoard />} />
                <Route path='/records/student' element={<StudentRecords />}  ></Route>
                <Route path='/records/visitor' element={<VisitorRecords />}  ></Route>
                <Route path='/records/staff' element={<StaffRecords />}  ></Route>
                <Route path='/records/parent' element={<ParentRecords />}  ></Route>

                {/* not found */}
                <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
        </div>
    )
}

export default App
