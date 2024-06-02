import React, { useRef, forwardRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './VisitorPass.css';
import QRCodeSVG from 'qrcode.react';
import profilephoto from './profile-pic.png'

const VisitorPass = React.forwardRef(({ data }, ref) => {
    return (
        <div className="visitor-pass" ref={ref}>
            <div className="header">
                <div className="company-logo">
                    <img src={data.companyLogoUrl} alt="Company Logo" />
                </div>
                <div className="company-info">
                    <h1>DAIICT</h1>
                    <p>Gandhinagar</p>
                </div>
            </div>
            <div className="details">
                <p><span>Sr.No.:</span> {data.serialNo}</p>
                <p><span>Date:</span> {data.date}</p>
                <div className="section-title">PARTICULARS OF THE VISITOR</div>
                <div className="visitor-info">

                    <div className="visitor-details">
                        <p><span>Name:</span> {data.name}</p>
                        <p><span>Organization:</span> {data.organization}</p>
                        <p><span>Purpose:</span> {data.purpose}</p>
                        <p><span>Person To Be Visited:</span> {data.personToVisit}</p>
                        <p><span>Company & Department:</span> {data.companyDepartment}</p>
                        <p><span>Floor & Extension:</span> {data.floorExtension}</p>
                    </div>
                    <div className="visitor-photo">
                        <img src={data.photoUrl} alt="Visitor" />
                    </div>
                </div>
                <div className="footer">
                    <div className="initials">Initials</div>
                    <div className="timeout">Time Out</div>
                </div>
                <div className="qr-code">
                    <QRCodeSVG value={data.qrCodeValue} size={128} />
                </div>
                <p className="validity">Validity: From {data.validityFrom} To {data.validityTo}</p>
            </div>
        </div>
    );
});


const App = () => {
    const componentRef = useRef();

    const visitorData = {
        serialNo: '118',
        date: '21/01/2012',
        name: 'Dharmel Parmar',
        organization: 'SMG Insulation Pvt Ltd.',
        purpose: 'For VMS Installation',
        personToVisit: 'ASHOK S DESAI',
        companyDepartment: 'PURCHASE',
        floorExtension: '1ST FLOOR - TOWER A',
        photoUrl: 'profile-pic.png',  // Ensure this image exists in the public folder
        companyLogoUrl: 'company_logo.png',  // Ensure this image exists in the public folder
        qrCodeValue: 'https://example.com',
        validityFrom: '21/01/2012',
        validityTo: '22/01/2012',
    };

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    return (
        <div className="App">
            <button onClick={handlePrint} className="print-button">Print Visitor Pass</button>
            <VisitorPass ref={componentRef} data={visitorData} />
        </div>
    );
}

export default App;