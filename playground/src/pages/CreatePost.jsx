import React, {useState} from 'react'
import * as Yup from 'yup'

const fields = {
    title: "",
    body: ""
}

function CreatePost() {
    const[form,setForm] = useState(fields)
    const[errors,setErrors] = useState({})

    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required()
    })
    const onChange = async (e) => {
        const {name, value} = e.target
        setForm((prev) => ({
            ...prev,
            [name]:value

        }))

        await schema.validate(form, {abortEarly:false})
        .then(() => true)
        .catch((e) => {
           e.inner.map((value) =>({
            ...prev,
            [value.path]: value.message
           }))
            console.log(e.inner)
        })
    }
    const submit = () => {
        alert(JSON.stringify(form))
    }

  return (
   <>
   <h1>Create Post</h1>
   <label>Title:</label>
   <input type='text' name='title' onChange={onChange}></input>
   <br/>
   <label>Body:</label>
   <textarea name='body' onChange={onChange}></textarea>
   <br/>
   <button onClick={submit}>Submit</button>
   </>
  )
}

export default CreatePost
  