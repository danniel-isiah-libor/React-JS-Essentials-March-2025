import { useState, useEffect } from 'react'
import Container from '../Components/Basic/Container'
import * as Yup from 'yup'
import Field from '../Components/Form/Field'
export default function CreatePost() {


    const fields = {
        title: '',
        body: ''
    }

    const [form, setForm] = useState(fields);
    const [errors, setErrors] = useState(fields);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (validated) {
            validate();
        }
    }, [form])

    const schema = Yup.object().shape({
        title: Yup.string().required("Title is required").min(3).max(255),
        body: Yup.string().required("Body is required").min(3).max(255),
    })

    const onChange = async (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }))
    }

    const validate = async () => {
        return schema.validate(form, { abortEarly: false })
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
        if (await validate()) {
            // saving...
            alert(JSON.stringify(form))
        }
    }

    return (
        <Container>
            <p className="text-xl font-semibold">Create Post</p>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                    <Field errors={errors} type={"text"} labelName={"Title"} placeholder={"Title"} attribElement={"title"} onChange={onChange} />

                </div>
                <div className="col-span-12">
                    <label htmlFor={"body"} >
                        <span className="text-sm font-medium text-gray-700">Body</span>
                        <textarea
                            id='body'
                            name='body'
                            className="w-full border border-gray-400 rounded shadow-sm resize-none"
                            rows={5}
                            cols={5}
                            placeholder='Body'
                            value={form.body}
                            onChange={onChange}
                        >
                        </textarea>
                    </label>
                    {
                        (errors) && (
                            errors.body && <p style={{ color: 'red' }}>{errors.body}</p>
                        )
                    }
                </div>
                <div className="col-span-12">
                    <button
                        onClick={submit}
                        className="w-full h-full rounded-sm border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:ring-3 focus:outline-hidden"
                    >
                        Post
                    </button>
                </div>
            </div>

        </Container>
    )
}
