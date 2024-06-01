import React from 'react'
import { Navbar } from '../Components/Navbar'
import { StickyFooterMobile } from '../Components/StickyFooterMobile'
import WebcamDemo from '../Components/FaceDetection'
import { postRequest, postRequestWithToken } from '../Services/Api'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';


const FaceScan = () => {

    const [faceDetected, setFaceDetected] = React.useState(false)
    const [faceCount, setFaceCount] = React.useState(0)
    const [imgSrc, setImgSrc] = React.useState(null);
    const [isStudent, setIsStudent] = React.useState(false);
    const [isLongLeave, setIsLongLeave] = useState(false);
    const [reason, setReason] = useState('');


    const navigate = useNavigate();
    const handleClose = () => setIsStudent(false);
    const { state } = useLocation();
    console.log(state);
    const uuid = state?.uuid;
    if (!uuid) {
        alert('Please scan your Id first.');
        navigate('/qr-reader');
    }

    const base64ToFile = (base64, filename) => {
        const arr = base64.split(',');
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);

        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }

        return new File([u8arr], filename, { type: mime });
    };

    const handleSend = () => {
        // if()
        const uuid = state?.uuid;
        if (uuid.endsWith('student') && state.hasOwnProperty('entry') && state.entry == false) {
            setIsStudent(true);
        }
        else {
            sendToServer();
        }
    };

    const sendToServer = async () => {
        if (imgSrc) {
            const file = base64ToFile(imgSrc, 'capture.png');

            // access id from url
            const uuid = state?.uuid;

            const formData = new FormData();
            formData.append('photo', file);
            formData.append('uuid', uuid);
            formData.append('isLongLeave', isLongLeave);
            formData.append('reason', reason);

            // console.log(formData.get('file'));
            let type;
            if(uuid.endsWith('student')) type = "student"
            // else if(uuid.endsWith('staff')) type = "staff"
            else type = "staff"
            // else {
            //     alert('Something Went Wrong. Please try again.');
            //     navigate('/qr-reader')
            // }
            
            console.log(`security/${type}EntryExit`)

            try {
                const response = await postRequest(`security/${type}EntryExit`, formData, {
                    'Content-Type': 'multipart/form-data'
                }, {})

                console.log(response)

                if (response.status == 200) {

                    if (response.data.hasOwnProperty('entry')) {
                        if (response.data.entry) {
                            alert('Entry Successful');
                        } else {
                            alert('Exit Successful');
                        }
                    }
                } else {
                    console.error('File upload failed');
                }
                setFaceDetected(false);
                setFaceCount(0);
                setImgSrc(null);
                setIsStudent(false);
                setIsLongLeave(false);
                setReason('');
                navigate('/qr-reader')
            } catch (error) {
                console.error('Error:', error);
            }
        }
    };

    return (
        <>
            <Navbar />

            <div className='flex flex-col justify-center items-center h-screen w-screen '>
                <div className='bg-white p-10 rounded-2xl shadow-2xl w-[400px] space-y-5'>

                    <div className=' flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold text-blue5 '>Place your Face in Box.</h1>
                        <p className='text-blue5 font-light'>Face Count: {faceCount}</p>
                    </div>

                    <div className='flex flex-col justify-center items-center bg-gray-200 p-8 rounded-2xl'>
                        {

                            faceDetected &&
                            <>
                                <img src={imgSrc} alt="face" className='w-[300px] h-[300px]' />
                                <button className=' mt-3 bg-blue2 text-white px-6 py-2 rounded-2xl' onClick={handleSend}>Send</button>
                            </>
                        }
                        {
                            !faceDetected && <WebcamDemo setFaceDetected={setFaceDetected} SetFaceCount={setFaceCount} setImgSrc={setImgSrc} />
                        }

                        {
                            // isStudent &&
                            <>
                                <Modal show={isStudent} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Modal heading</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>
                                        <Form>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Long leave ?</Form.Label>

                                                <Form.Check // prettier-ignore
                                                    type="switch"
                                                    id="custom-switch"
                                                    name='isLongLeave'
                                                    onChange={(e) => setIsLongLeave(e.target.checked)}
                                                />
                                            </Form.Group>

                                            {/* disabled if switch is turned of. */}
                                            <Form.Group
                                                className="mb-3"
                                                controlId="exampleForm.ControlTextarea1"
                                            >
                                                <Form.Label>Reason </Form.Label>
                                                <Form.Control type='text' disabled={!isLongLeave} onChange={(e) => setReason(e.target.value)} />
                                            </Form.Group>
                                        </Form>
                                    </Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                        <Button variant="primary" onClick={sendToServer}>
                                            Save Changes
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </>
                        }

                        <div className='flex items-center justify-evenly'>
                            <button className=' mt-3 bg-blue2 text-white px-6 py-2 rounded-2xl' onClick={() => { setFaceDetected(false); setFaceCount(0); setImgSrc(null) }}>Retake</button>
                            <button className=' mt-3 bg-blue2 text-white px-6 py-2 rounded-2xl' onClick={() => { window.location.href = '/qr-reader' }}>Back</button>
                        </div>
                    </div>
                </div>
            </div>

            <StickyFooterMobile />

        </>
    )
}

export default FaceScan
