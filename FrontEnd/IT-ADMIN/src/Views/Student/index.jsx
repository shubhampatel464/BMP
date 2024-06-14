import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Navbar } from '../../Components/Navbar';
import { StickyFooterMobile } from '../../Components/StickyFooterMobile';
import { useForm } from 'react-hook-form';
import { useLocation, Link } from 'react-router-dom';
import AddStudent from './AddStudent';
import AddBatch from './AddBatch';

const Student = () => {


    const location = useLocation();

    const getTabIndex = (pathname) => {
        switch (pathname) {
            case '/delete-student':
                return 2;
            case '/add-batch':
                return 1;
            case '/add-student':
            default:
                return 0;
        }
    };

    return (
        <div className='h-screen'>
            <Navbar />
            {/* <h1 className="text-2xl font-bold text-center mt-5">Visitors</h1> */}
            <div className='w-screen md:w-1/2 mx-auto mt-5 flex items-center justify-center top-0 sticky' >
                <Tabs selectedIndex={getTabIndex(location.pathname)} onSelect={(index) => {
                    switch (index) {
                        case 2:
                            window.history.pushState(null, '', '/delete-student');
                            break;
                        case 1:
                            window.history.pushState(null, '', '/add-batch');
                            break;
                        case 0:
                        default:
                            window.history.pushState(null, '', '/add-student');
                            break;
                    }
                }}>
                    <TabList className="flex p-1 bg-gray-100 rounded-full mx-auto mb-4" style={{ width: 'fit-content' }}>
                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            <Link to="/add-student">Add Student</Link>
                        </Tab>

                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            <Link to="/add-batch">Add Batch</Link>
                        </Tab>

                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            <Link to="/delete-student">Delete Student</Link>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <AddStudent />
                    </TabPanel>

                    <TabPanel>
                        <AddBatch />
                    </TabPanel>

                    <TabPanel>
                        <div>
                            {/* Content for List */}
                            <div className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl space-y-5 w-screen h-screen '>
                                {/* <h1 className='text-2xl font-bold'>Current Visitors Inside Campus</h1> */}
                                    No students to show
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <StickyFooterMobile />
        </div>
    )
}

export default Student
