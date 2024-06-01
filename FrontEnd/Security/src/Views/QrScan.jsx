import React from 'react'
import { Navbar } from '../Components/Navbar'
import { StickyFooterMobile } from '../Components/StickyFooterMobile'
import QrReader from '../Components/ReadQRComponent'

const QrScan = () => {
    return (
        <>
            <Navbar />
            <div className='flex flex-col justify-center items-center h-screen w-screen '>
                <div className='bg-white p-10 rounded-2xl shadow-2xl w-[400px] space-y-5'>

                    <div className=' flex flex-col items-center justify-center'>
                        <h1 className='text-2xl font-bold text-blue5 '>Place your QR in Box.</h1>
                    </div>

                    <div className='flex justify-center items-center bg-gray-200 p-8 rounded-2xl'>
                        <QrReader />
                    </div>

                </div>
            </div>
            <StickyFooterMobile />
        </>
    )
}

export default QrScan
