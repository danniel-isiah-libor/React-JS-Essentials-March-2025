// import React from 'react'
// import dashboardStyles from '../css/Dashboard.module.css';
// // import tailwindcss from

// function Dashboard() {
//     const posts = [
//         {
//             title:'Post 1',
//             body: 'This is Post1'
//         },
//         {
//             title:'Post 2',
//             body: 'This is Post2'
//         },
//         {
//             title:'Post 3',
//             body: 'This is Post3'
//         }
//     ]

//     const styles = {
//         border : "1px solid red",
//         marginBottomL:"18px",
//     }

//   return (
//     <>
//     <div>Dashboard</div>
//         <br />


//     <ul className={dashboardStyles.bgColor}>
//     {
//         posts.map((post) => {
//             return (
//                 // <ListItem post={post} />
//                 <li style={styles}>
//                 <h3>{post.title}</h3>
//                 <p>{post.body}</p>
//                 </li>
//             )
//         })
//     }
//     </ul>
//     </>
//   )
// }

// export default Dashboard

import React, {useEffect, useState} from 'react'
import dashboardStyles from "../css/Dashboard.module.css";
import UsersTable from "../dashboard/UserTable.jsx";

const fields = {
    title:"",
    body:""
}

 let firstRender = true

    // const [posts] = useState([
    //     {
    //         title: 'Learning React',
    //         body: 'React is a JavaScript library for building user interfaces.'
    //     },
    //     {
    //         title: 'Understanding State',
    //         body: 'State is a built-in object that stores property values that belong to a component.'
    //     },
    //     {
    //         title: 'Props in React',
    //         body: 'Props are arguments passed into React components.'
    //     }
    // ]);


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