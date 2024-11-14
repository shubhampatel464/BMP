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
import { base64ToFile } from './../Services/Helpers';

const FaceDection = () => {

    const [faceDetected, setFaceDetected] = React.useState(false)
    const [faceCount, setFaceCount] = React.useState(0)
    const [imgSrc, setImgSrc] = React.useState(null);
    const [isStudent, setIsStudent] = React.useState(false);
    const [isLongLeave, setIsLongLeave] = useState(false);
    const [reason, setReason] = useState('');


    const navigate = useNavigate();
    const handleClose = () => setIsStudent(false);
    const { state } = useLocation();
    // console.log(state)


    const handleSend = (e) => {
        e.preventDefault();
        // if()
        // const uuid = state?.uuid;
        // if (uuid.endsWith('student') && state.hasOwnProperty('entry') && state.entry == false) {
        //     setIsStudent(true);
        // }
        // else {
        sendToServer();
        // }
    };

    const sendToServer = async () => {
        if (imgSrc) {
            const byteString = atob(imgSrc.split(',')[1]);
            const mimeString = imgSrc.split(',')[0].split(':')[1].split(';')[0];
            const ab = new ArrayBuffer(byteString.length);
            const ia = new Uint8Array(ab);

            for (let i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            const blob = new Blob([ab], { type: mimeString });
            const formData = new FormData();
            formData.append('image', blob, 'photo_1.jpg');

            try {
                const response = await fetch('http://127.0.0.1:8000/predict_face', {
                    method: 'POST',
                    body: formData // Send formData as is, to be processed as multipart/form-data
                });

                if (response.ok) {
                    const responseData = await response.json();
                    console.log(responseData);
                    alert(responseData.predicted_label || 'Success');
                } else {
                    console.error('File upload failed');
                    const errorData = await response.json();
                    alert(errorData.detail || 'An error occurred');
                }
                setFaceDetected(false);
                setFaceCount(0);
                setImgSrc(null);
                setIsStudent(false);
                setIsLongLeave(false);
                setReason('');
                // navigate('/qr-reader')
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
                                <button type='submit' className=' mt-3 bg-blue2 text-white px-6 py-2 rounded-2xl' onClick={handleSend}>Send</button>
                            </>
                        }
                        {
                            !faceDetected && <WebcamDemo setFaceDetected={setFaceDetected} SetFaceCount={setFaceCount} setImgSrc={setImgSrc} />
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

export default FaceDection

