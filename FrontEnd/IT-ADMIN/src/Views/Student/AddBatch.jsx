import React from 'react'
import { InputField } from '../../Components/InputField';
import { Button } from '../../Components/Button';
import { postRequest } from '../../Services/Api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const AddBatch = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    register('File', {required: 'Please upload a file'})


    const onSubmit = async (data) => {
        console.log(data)

        try {
            const msg = `Are you sure you want to add this batch?`
            const confirmation = window.confirm(msg, { title: 'Confirm Batch' })
            if (!confirmation) {
                return
            }

            const dataToSend = {
                student : data.File[0]
            }

            console.log(dataToSend)

            const res = await postRequest('itAdmin/addBulkStudents', dataToSend, {
                'Content-Type': 'multipart/form-data'   
            }, {})
            
            console.log(res)

            if (res.status == 200) {
                alert('Batch added successfully.')
                reset()
                navigate('/dashboard')
            }
            else {
                alert('Failed to add Batch. Please try again.')
            }
        } catch (error) {
            console.log(error)
            alert('Failed to add Batch. Please try again.')
        }
    }

    return (
        <>
            <div className='mt-4'>
                <form className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl w-[400px] space-y-5 ' autoComplete='off'
                    id='loginForm' onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='text-2xl font-bold'>Add Batch</h1>
                    <p className='text-gray-500'>Please fill the form to add Vehicle.</p>

                    <InputField
                        label='File'
                        type='file'
                        register={register}
                        error={errors.File?.message}
                        accept='.xlsx,.xls,.csv'
                        required
                    />

                    <Button type='submit'> Add Batch </Button>
                </form>
            </div>
        </>
    )
}

export default AddBatch
