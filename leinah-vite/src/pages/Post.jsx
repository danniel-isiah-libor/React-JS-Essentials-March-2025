import Container from '../Components/Basic/Container.jsx';
import Field from '../Components/Form/Field.jsx';
import React, { useState, useEffect } from 'react';

const fields = {
    title: '',
    body: ''
}

let firstRender = true;
export default function Post() {

    const [form, setForm] = useState(fields);
    const [errors, setErrors] = useState(fields);
    const [posts, setPosts] = useState([]);
    const [validated, setValidated] = useState(false);

    useEffect(() => {
        if (!firstRender) {
            validate();
        }
    }, [form])

    useEffect(() => {
        const hasErrors = !Object.values(errors).filter((e) => e !== "").length;
        setValidated(!hasErrors);
    }, [errors])

    const onChange = (e) => {
        const { name, value } = e.target;

        firstRender = false;
        setForm((prev) => (
            {
                ...prev,
                [name]: value
            }
        ));

        setErrors((prev) => ({
            ...prev,
            [name]: ''
        }))
    }

    const submit = () => {
        validate();

        if (form.title && form.body) {
            setPosts((prev) => [...prev, form]);
            setForm(fields)
        }
    }

    const validate = () => {
        let newErrors = { ...fields };

        if (!form.title) {
            newErrors.title = 'Title is required';
        }
        if (!form.body) {
            newErrors.body = 'Body is required';
        }

        setErrors(newErrors);
    }


    return (
        <Container>
            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-12">
                    <Field
                        type={"text"}
                        labelName={"Title"}
                        placeholder={"Title"}
                        attribElement={"title"}
                        value={form.title}
                        onChange={onChange}
                        errors={errors}
                    />
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
                    {errors.body && <span style={{ color: 'red' }}>{errors.body}</span>}
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

            {posts.map((post, index) => {
                return (
                    <article className="my-5 overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white" key={index}>
                        <div className=" p-4">
                            <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
                            <time dateTime="2022-10-10" className="block text-xs text-gray-500"> {new Date().toDateString()} </time>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {post.body}
                            </p>
                        </div>
                    </article>
                )
            })}
        </Container>
    )
}
