import React, {useState, useEffect} from 'react'
import * as Yup from 'yup'

const fields = {
    title: "",
    body: ""
}

function CreatePost() {
    const [form, setForm] = useState(fields)
    const [errors, setErrors] = useState({})
    const [validated, setValidated] = useState(false)

    useEffect(() => {
        if (validated) {
            validate()
        }
    }, [form])

    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        body: Yup.string().required()
    })

    const onChange = async (e) => {
        const {name, value} = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }))
    }

    const validate = () => {
        return schema.validate(form, {abortEarly: false})
        .then(() => true)
        .catch((e) => {
            e.inner.map((value) => {
                setErrors((prev) => ({
                    ...prev,
                    [value.path]: value.message
                }))
            })

            return false
        })
        .finally(() => {
            setValidated(true)
        })
    }

    const submit = async () => {
        const validated = await validate()

        console.log(validated);

        // alert(JSON.stringify(form))
    }
    
  return (
    <>
        <h1>Create Post</h1>

        <label>Title:</label>
        <input type="text" name="title" onChange={onChange}/>
        {
            (errors) && (
                errors.title && <p style={{color: 'red'}}>{errors.title}</p>
            )
        }

        <br />
        
        <label>Body:</label>
        <textarea name="body" onChange={onChange}></textarea>
        {
            (errors) && (
                errors.body && <p style={{color: 'red'}}>{errors.body}</p>
            )
        }

        <br />

        <button onClick={submit}>Submit</button>
    </>
  )
}

export default CreatePost