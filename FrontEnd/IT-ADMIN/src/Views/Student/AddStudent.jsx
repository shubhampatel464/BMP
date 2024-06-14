import React from 'react'
import { InputField } from '../../Components/InputField';
import { Button } from '../../Components/Button';
import { getRequest, postRequest } from '../../Services/Api';
import { useForm } from 'react-hook-form';


const AddStudent = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    register('StudentID', { required: 'Student ID is required' })
    register('VehicleNumber', { required: 'Vehicle Number is required' })

    const onSubmit = async (data) => {
        try {
            const msg = "Student Name : " + isStudent.name + "\nStudent ID : " + isStudent.student_id + "\nVehicle Number : " + data.VehicleNumber + "\n\nAre you sure you want to add this vehicle?"
            // console.log(msg)
            // take confirmation from user
            const confirmation = window.confirm(msg, { title: 'Confirm Vehicle Addition' })
            if (!confirmation) {
                return
            }

            // console.log(data)
            const dataToSend = {
                student_id: data.StudentID,
                vehicle: data.VehicleNumber
            }

            const res = await postRequest('hostelWarden/addVehicle', dataToSend)
            // console.log(res)

            if (res.status == 200) {
                alert('Vehicle Added Successfully')
                reset()
            }
            else if (res.status == 400) {
                alert('Student not found')
            }
            else if (res.status == 401) {
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
            <div className='mt-32'>
                <form className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl w-[400px] space-y-5 ' autoComplete='off'
                    id='loginForm' onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='text-2xl font-bold'>Add Student</h1>
                    <p className='text-gray-500'>Please fill the form to add Vehicle.</p>

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
        </>
    )
}

export default AddStudent
