import React from 'react'
import { Navbar } from '../../Components/Navbar'
import { StickyFooterMobile } from '../../Components/StickyFooterMobile'
import ParentListGrid from './List'

const ParentListForToday = () => {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center mt-10">
                <h1 className="text-3xl font-bold">Parent Visits for Today</h1>
            </div>
            
            {/* ParentListGrid */}
            <ParentListGrid />

            <StickyFooterMobile />

        </>
    )
}

export default ParentListForToday
