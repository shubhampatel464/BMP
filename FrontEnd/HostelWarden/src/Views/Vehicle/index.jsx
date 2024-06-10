import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Navbar } from '../../Components/Navbar';
import { StickyFooterMobile } from '../../Components/StickyFooterMobile';
import { useForm } from 'react-hook-form';
import { InputField } from '../../Components/InputField';
import { Button } from '../../Components/Button';
import { useNavigate } from 'react-router-dom';
import { postRequest } from '../../Services/Api';
import { base64ToFile } from '../../Services/Helpers';
// import CurrentList from './CurrentList';
import { useLocation, Link } from 'react-router-dom';

const Vehicle = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const location = useLocation();

    const getTabIndex = (pathname) => {
        switch (pathname) {
            case '/vehicle/records':
                return 1;
            case '/vehicle/add-vehicle':
            default:
                return 0;
        }
    };

    register('StudentID', { required: 'Student ID is required' })
    register('VehicleNumber', { required: 'Vehicle Number is required' })
    const onSubmit = async (data) => {
        try {
            console.log(data)
            const dataToSend = {
                student_id: data.StudentID,
                vehicle: data.VehicleNumber
            }

            const res = await postRequest('hostelWarden/addVehicle', dataToSend)
            // console.log(res.response)

            if (res.response.status == 200) {
                alert('Vehicle Added Successfully')
                reset()
            }
            else if (res.response.status == 400) {
                alert('Student not found')
            }
            else if (res.response.status == 401) {
                alert('Vehicle already added')
            }
            else {
                alert('Failed to add vehicle. Please try again later.')
            }
        } catch (error) {
            alert('Failed to add vehicle')
        }
    }


    return (
        <>
            <Navbar />
            {/* <h1 className="text-2xl font-bold text-center mt-5">Visitors</h1> */}
            <div className='w-screen md:w-1/2 mx-auto mt-5 flex items-center justify-center top-0 sticky' >
                <Tabs selectedIndex={getTabIndex(location.pathname)} onSelect={(index) => {
                    switch (index) {
                        case 1:
                            window.history.pushState(null, '', '/vehicle/add-vehicle');
                            break;
                        case 0:
                        default:
                            window.history.pushState(null, '', '/vehicle/records');
                            break;
                    }
                }}>
                    <TabList className="flex p-1 bg-gray-100 rounded-full mx-auto mb-4" style={{ width: 'fit-content' }}>
                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            <Link to="/vehicle/add-vehicle">Add New Vehicle</Link>
                        </Tab>
                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            <Link to="/vehicle/records">Vehicle Records</Link>
                        </Tab>
                    </TabList>
                    <TabPanel>
                        <div className='md:mt-32'>
                            <form className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl w-[400px] space-y-5 ' autoComplete='off'
                                id='loginForm' onSubmit={handleSubmit(onSubmit)}>

                                <h1 className='text-2xl font-bold'>Add Visitor</h1>
                                <p className='text-gray-500'>Please fill the form to add visitor.</p>

                                {/* student id, vechile number */}
                                <InputField
                                    placeholder='Student ID'
                                    label='StudentID'
                                    type='text'
                                    register={register}
                                    error={errors.StudentID?.message}
                                />

                                <InputField
                                    placeholder='XX-XX-YY-XXXX'
                                    label='VehicleNumber'
                                    type='text'
                                    register={register}
                                    error={errors.VehicleNumber?.message}
                                />

                                <Button type='submit'> Add Visitor </Button>
                            </form>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            {/* Content for List */}
                            <div className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl space-y-5 w-screen h-screen '>
                                {/* <h1 className='text-2xl font-bold'>Current Visitors Inside Campus</h1> */}
                                {/* <CurrentList /> */}
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <StickyFooterMobile />
        </>
    )
}

export default Vehicle
