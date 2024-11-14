import React from 'react'
import { InputField } from '../../Components/InputField';
import { Button } from '../../Components/Button';
import { postRequestWithToken } from '../../Services/Api';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const DeleteStudent = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate()

    register('StudentID', { required: 'Student ID is required.' })

    const deleteface = async (student_id) => {

        const data = new FormData()

        const res = await fetch(`http://127.0.0.1:8000/delete_face/${student_id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({})
            }
        )

        console.log(res)
        return res
    }


    const onSubmit = async (data) => {
        // console.log(data)

        try {
            const msg = `Are you sure you want to Delete this student - ${data.StudentID}?`
            const confirmation = window.confirm(msg, { title: 'Confirm Delete' })
            if (!confirmation) {
                return
            }

            const dataToSend = {
                student_id: data.StudentID
            }

            const resposse = await deleteface(data.StudentID)
            // console.log(resposse)
            const res = await resposse.json()
            console.log(res)

            if (resposse.ok) {
                alert('Student deleted successfully.')
                reset()
                // navigate('/dashboard')
            }
            else if(res.status == 400){
                alert('Student not found.')
            }
            else {
                alert('Failed to delete Student. Please try again.')
            }
        } catch (error) {
            console.log(error)
            alert('Failed to delete Student. Please try again.')
        }
    }

    return (
        <>
            <div className='mt-4'>
                <form className='md:bg-white p-10 md:rounded-2xl md:shadow-2xl w-[400px] space-y-5 ' autoComplete='off'
                    id='loginForm' onSubmit={handleSubmit(onSubmit)}>

                    <h1 className='text-2xl font-bold'>Delete Student</h1>
                    <p className='text-gray-500'>Please fill the form to delete student.</p>

                    <InputField
                        label='StudentID'
                        type='text'
                        register={register}
                        error={errors.StudentID?.message}
                        required
                    />

                    <Button type='submit'> Delete Student </Button>
                </form>
            </div>
        </>
    )
}

export default DeleteStudent
