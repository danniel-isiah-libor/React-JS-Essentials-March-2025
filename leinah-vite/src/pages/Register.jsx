import Field from "../Components/Form/Field"
import { useState, useEffect } from "react";

const fields = {
    first_name: '',
    user_name: '',
    email: '',
    password: '',
    confirm_password: ''
}
let firstRender = true;
export default function Register() {

    const [formData, setFormData] = useState(fields);

    const [errors, setErrors] = useState(fields);
    const [validated, setValidated] = useState(false);
    // const [firstRender, setFirstRender] = useState(true);

    useEffect(() => {
        if (!firstRender) {
            validation();
        }
    }, [formData])

    useEffect(() => {
        if(validated){
            const hasErrors = !Object.values(errors).filter((e) => e !== "").length;

            if(!hasErrors){
                alert(JSON.stringify(formData))
            }
        }
    }, [validated])

    const onChange = (e) => {
        const { name, value } = e.target;

        firstRender = false;
        setErrors(prev => ({
            ...prev,
            [name]: ''
        }))
        setValidated(false)

        setFormData((prev) => ({
            ...prev,
            [name]: value ?? ""
        }))
    }

    const submit = () => {
        validation();
        setValidated(true);
    }

    const validation = () => {
        if (!formData.first_name) {
            setErrors((prev) => ({
                ...prev,
                first_name: 'First Name is required'
            }))
        }
    }

    return (
        <div>

            <Field type="text" value={formData.first_name} onChange={onChange} labelName="First Name" placeholder="First Name" errors={errors} attribElement={"first_name"} />
            <br />

            <Field type="text" value={formData.user_name} onChange={onChange} labelName="Username" placeholder="Username" errors={errors} attribElement={"user_name"} />
            <br />

            <Field type="email" value={formData.email} onChange={onChange} labelName="Email" placeholder="Email" errors={errors} attribElement={"email"} />
            <br />

            <Field type="password" value={formData.password} onChange={onChange} labelName="Password" placeholder="Password" errors={errors} attribElement={"password"} />
            <br />

            <Field type="password" value={formData.confirm_password} onChange={onChange} labelName="Confirm Password" placeholder="Confirm Password" errors={errors} attribElement={"confirm_password"} />
            <br />
            <button onClick={submit} className="btn p-3 bg-green-400 rounded-lg text-white cursor-pointer" type="submit">Register</button>
        </div>
    )
}
