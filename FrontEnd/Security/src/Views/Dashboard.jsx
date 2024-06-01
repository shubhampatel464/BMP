import React from 'react'
import { Navbar } from '../Components/Navbar'
import { StickyFooterMobile } from '../Components/StickyFooterMobile'
import Example from '../Components/FormModal'


const Dashboard = () => {
    return (
        <>
            <Navbar />
            {/* <Example /> */}

            {/* heading : "Security on left side at top" */}
            <div className='flex flex-col justify-between items-center h-screen w-screen py-6 '>
                <h1 className='text-5xl font-bold text-blue5 '>Security</h1>

                {/* 4 tiles, 2 in each row */}
                <div className='flex justify-evenly items-center w-full h-full'>
                    <div className='bg-white p-10 rounded-2xl shadow-2xl w-[200px] h-[200px] space-y-5'>
                        <h1 className='text-2xl font-bold'>Face Detection</h1>
                        <p className='text-gray-500'>Detect face using webcam.</p>
                    </div>
                    <div className='bg-white p-10 rounded-2xl shadow-2xl w-[200px] h-[200px] space-y-5'>
                        <h1 className='text-2xl font-bold'>QR Code</h1>
                        <p className='text-gray-500'>Generate QR code.</p>
                    </div>
                    <div className='bg-white p-10 rounded-2xl shadow-2xl w-[200px] h-[200px] space-y-5'>
                        <h1 className='text-2xl font-bold'>Read QR Code</h1>
                        <p className='text-gray-500'>Read QR code using webcam.</p>
                    </div>
                    <div className='bg-white p-10 rounded-2xl shadow-2xl w-[200px] h-[200px] space-y-5'>
                        <h1 className='text-2xl font-bold'>Login</h1>
                        <p className='text-gray-500'>Login to your account.</p>
                    </div>

                </div>
            </div>

            <StickyFooterMobile />
        </>
    )
}

export default Dashboard
