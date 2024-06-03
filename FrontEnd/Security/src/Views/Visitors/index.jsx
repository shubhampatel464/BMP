import React from 'react'
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Navbar } from '../../Components/Navbar';
import { StickyFooterMobile } from '../../Components/StickyFooterMobile';
import { useForm } from 'react-hook-form';
import { InputField } from '../../Components/InputField';
import { Button } from '../../Components/Button';
import { useNavigate } from 'react-router-dom';

const Visitors = () => {


    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [isOtpSent, setIsOtpSent] = React.useState(true)


    const navigate = useNavigate()

    // This will contain all form data once submit button is clicked.
    const onSubmit = (data) => {
        console.log(data)
        alert("here")
        // if (!isOtpSent) setIsOtpSent(true)
    }

    register('Name', { required: { value: true, message: 'Name is required' } })

    // validate mobile number, it should contain 10 digits
    register('Mobile', {
        required: { value: true, message: 'Mobile is required' },
        minLength: { value: 10, message: 'Mobile number should be 10 digits' },
        maxLength: { value: 10, message: 'Mobile number should be 10 digits' }
    })

    register('Purpose', {
        required: { value: true, message: 'Purpose is required' },
    })

    register('otp', {
        required: { value: true, message: 'OTP is required' },
        minLength: { value: 6, message: 'OTP should be 6 digits' },
        maxLength: { value: 6, message: 'OTP should be 6 digits' },
        // required: { value: isOtpSent, message: 'Please send OTP first' }
    })

    return (
        <>
            <Navbar />
            {/* <h1 className="text-2xl font-bold text-center mt-5">Visitors</h1> */}
            <div className='w-screen md:w-1/2 mx-auto mt-5 flex items-center justify-center sticky' >
                <Tabs>
                    <TabList className="flex p-1 bg-gray-100 rounded-full mx-auto" style={{ width: 'fit-content' }}>
                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            Add Visitor
                        </Tab>
                        <Tab className="px-4 py-2 rounded-full cursor-pointer focus:outline-none" selectedClassName="bg-blue3 text-white">
                            List
                        </Tab>
                    </TabList>

                    <TabPanel>
                        <div>
                            {/* login form div */}
                            <div className='flex justify-center items-center'>

                                {/* form with box shadow */}
                                <form className='mt-5 md:bg-white p-10 w-[400px] md:rounded-2xl md:shadow-2xl space-y-5 ' autoComplete='off'
                                    id='loginForm' onSubmit={handleSubmit(onSubmit)}>
                                    <h1 className='text-2xl font-bold'>Add Visitor</h1>

                                    {/* name, mobile, purpose, otp */}
                                    <InputField
                                        placeholder='John Doe'
                                        label='Name'
                                        type='text'
                                        register={register}
                                        error={errors.Name?.message}
                                        disabled={!isOtpSent}
                                    />

                                    <InputField
                                        placeholder='1234567890'
                                        label='Mobile'
                                        type='tel'
                                        register={register}
                                        error={errors.Mobile?.message}
                                        disabled={!isOtpSent}
                                    />



                                    <InputField
                                        placeholder='Meeting with Dean'
                                        label='Purpose'
                                        type='text'
                                        register={register}
                                        error={errors.Purpose?.message}
                                        disabled={!isOtpSent}
                                    />

                                    {
                                        isOtpSent &&
                                        <InputField
                                            placeholder='123456'
                                            label='OTP'
                                            type='number'
                                            register={register}
                                            error={errors.otp?.message}
                                        />
                                        // <Button type='submit' >Send OTP</Button>
                                    }

                                    {/* full width submit button */}
                                    <Button type='submit'>
                                        {
                                            isOtpSent ? 'Add Visitor' : 'Send OTP'
                                        }
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div>
                            {/* Content for List */}
                            List Content
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
            <StickyFooterMobile />
        </>
    )
}

export default Visitors
