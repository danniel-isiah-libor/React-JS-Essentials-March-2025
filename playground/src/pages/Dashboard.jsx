import React, {useState, useEffect} from 'react'
import dashboardStyles from '../css/Dashboard.module.css'
import UsersTable from '../dashboard/UsersTable.jsx'
import Field from '../form/Field.jsx'
import Button from '../form/Button.jsx'

const fields = {
    title: "",
    body: ""
}

let firstRender = true

function Dashboard() {
    const [form, setForm] = useState(fields);
    const [errors, setErrors] = useState(fields);
    const [validated, setValidated] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (validated) {
            const hasErrors = Object.values(errors).filter((e) => e !== "").length

            if (!hasErrors) {
                saving()
            }
        }
    }, [validated])

    useEffect(() => {
        if (!firstRender) {
            validate()
        }
    }, [form])

    const onChange = (e) => {
        const { name, value } = e.target

        setForm((prev) => ({
            ...prev,
            [name]: value
        }))

        setErrors((prev) => ({
            ...prev,
            [name]: ""
        }))

        setValidated(false)
        firstRender = false
    }

    const submit = () => {
        validate()
        setValidated(true)
    }

    const saving = () =>  {
        // saving...
        setPosts((prev) => ([
            ...prev,
            {...form}
        ]))

        setForm(fields)
        setErrors(fields)
        setValidated(false)
    }

    const validate = () => {
        if (!form.title) {
            setErrors((prev) => ({
                ...prev,
                title: "Title is required"
            }))
        }

        if (!form.body) {
            setErrors((prev) => ({
                ...prev,
                body: "Body is required"
            }))
        }
    }

return (
    <>
            <div className="text-indigo-500 text-2xl font-bold">Dashboard</div>

            <br />

            <Field errors={errors} label="Title" name="title" className="mb-4" onChange={onChange}/>
            <label className="block font-medium mb-2">Body:</label>
            <textarea 
                    onChange={onChange}
                    name="body" 
                    className="w-full p-2 border border-gray-300 rounded mb-4"
            ></textarea>
            {
                    (errors.body) && <p style={{color: 'red'}}>{errors.body}</p>
            }

            <br />
            <Button label="Post" clickEvent={submit} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"/>

            <br />

            <ul className={`${dashboardStyles.bgColor} mt-6`}>
                    {
                            posts.map((post, index) => {
                                    return (
                                            <li 
                                                    className="border border-red-500 mb-4 p-4 rounded shadow" 
                                                    key={index}
                                            >
                                                    <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
                                                    <p className="text-gray-600">{post.body}</p>
                                            </li>
                                    )
                            })
                    }
            </ul>

            <UsersTable/>
    </>
)
}

export default Dashboard