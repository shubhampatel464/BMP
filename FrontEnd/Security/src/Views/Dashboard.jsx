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
            <div className='flex flex-col justify-evenly items-center h-screen w-screen py-6 '>
                <h1 className='text-5xl font-bold text-blue5 '>Security</h1>

                {/* total 4 tiles, 2 tiles in 1st row and 2 tiles in 2nd row */}
                <div className='flex flex-col justify-between items-center h-full w-full'>
                    <div className='flex flex-wrap mt-12 justify-between items-center h-1/2'>
                        <div className='flex flex-col gap-10 justify-between items-center w-1/2 h-full'>
                            <div className='flex flex-col justify-center items-center w-[200px] h-1/2 rounded-lg shadow-xl p-20'>
                                <h1 className='text-3xl font-bold'>Total</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[200px] h-1/2 rounded-lg mt-4 shadow-xl p-20'>
                                <h1 className='text-3xl font-bold'>Total</h1>
                            </div>
                        </div>
                        <div className='flex flex-col justify-between items-center w-1/2 h-full'>
                            <div className='flex flex-col justify-center items-center w-[200px] h-1/2 rounded-lg shadow-xl p-20'>
                                <h1 className='text-3xl font-bold'>Total</h1>
                            </div>
                            <div className='flex flex-col justify-center items-center w-[200px] h-1/2 rounded-lg mt-4 shadow-xl p-20'>
                                <h1 className='text-3xl font-bold'>Total</h1>
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
