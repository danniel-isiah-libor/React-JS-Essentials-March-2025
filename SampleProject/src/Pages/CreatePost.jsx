import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'

const fields = {
    title: "",
    body: ""
}

export default function CreatePost() {
    const [form, setForm] = useState(fields)
    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false)
    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required()
    })
  useEffect(() => {
    if(!validated){
        validate()
    }

  }, [form])
    const onChange = async (e)  => {
        const {name, value} = e.target

         setForm(prev => ({
            ...prev,
            [name]: value
        }))
        
        setErrors(prev => ({
            ...prev,
            [name]: ""
        }))    
        
        
    }

    const validate =  () => {
         schema.validate(form, {abortEarly: false})
        .then(() => true)
        .catch((error) => {
            //console.log(error.inner)
            error.inner.map((value) => {
                setErrors(prev => ({
                    ...prev,
                    [value.path] : value.message
                }))
            })
            return false
        })
        .finally((res) => {
            setValidated(res)
        })
    }

    const submit = async() => {
       await validate()
    }

  return (
    <div className='flex flex-col space-y-4'>
        <h1>CreatePost</h1>
        <div className='flex flex-col space-y-2'>
            <label>Title :</label>
        <input type="text" name="title" className='border rounded px-2 py-1' onChange={onChange} />
        {errors &&

        errors.title &&    <p className='text-red-500 font-medium text-xs'>{errors?.title}</p>
        }
        </div>
        <div className='flex flex-col'>
            <label >Body :</label>
            <textarea name="body" className='border rounded px-2 py-1' onChange={onChange}/>
            {errors &&

errors.body &&    <p className='text-red-500 font-medium text-xs'>{errors?.body}</p>
}
        </div>
        <button className='px-2 py-1 border rounded cursor-pointer hover:bg-gray-300'>Submit</button>
    </div>
  )
}
