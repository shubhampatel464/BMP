import React from 'react'
import { Navbar } from '../Components/Navbar'
import { StickyFooterMobile } from '../Components/StickyFooterMobile'
import Example from '../Components/FormModal'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-evenly items-center w-screen py-6 '>
                <h1 className='text-5xl font-bold text-blue5 '>Security</h1>

                {/* total 4 tiles, 2 tiles in 1st row and 2 tiles in 2nd row */}
                <div className='flex flex-col justify-center items-center h-full w-screen'>
                    <div className='flex flex-wrap justify-center items-center h-1/2 w-screen '>

                        <div className='flex flex-col gap-10 justify-between items-center h-full m-10'>
                            <div className='flex flex-col justify-center items-center w-[290px] h-1/2 rounded-lg shadow-xl py-20 px-5 cursor-pointer	' onClick={() => navigate('/student-face-detection')} >
                                <h1 className='text-xl font-bold'>Face Detection</h1>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 justify-between items-center h-full m-10'>
                            <div className='flex flex-col justify-center items-center w-[290px] h-1/2 rounded-lg shadow-xl py-20 px-5 cursor-pointer	' onClick={() => navigate('/qr-reader')}>
                                <h1 className='text-xl font-bold'>Scan ID</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[290px] h-1/2 rounded-lg shadow-xl py-20 px-5 cursor-pointer	' onClick={() => navigate('/parent/list-today')} >
                                <h1 className='text-xl font-bold'>Today's Visits</h1>
                            </div>
                        </div>

                        <div className='flex flex-col gap-10 justify-between items-center h-full m-10'>
                            <div className='flex flex-col justify-center items-center w-[290px] h-1/2 rounded-lg shadow-xl py-20 px-5 cursor-pointer	' onClick={() => navigate('/add-visitor')} >
                                <h1 className='text-xl font-bold'>General Visitors</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[290px] h-1/2 rounded-lg shadow-xl py-20 px-5 cursor-pointer	' onClick={() => navigate('/records')}>
                                <h1 className='text-xl font-bold'>Records</h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <StickyFooterMobile />
        </>
    )
}

export default Dashboard
