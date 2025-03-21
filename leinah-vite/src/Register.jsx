import Field from "./Components/Form/Field"
export default function Register() {

    const submit = () => {
        alert("Form submitted")
    }

    return (
        <div>

            <Field type="text" labelName="First Name" placeholder="First Name" attribElement={"first_name"} />
            <br />

            <Field type="text" labelName="Username" placeholder="Username" attribElement={"user_name"} />
            <br />

            <Field type="email" labelName="Email" placeholder="Email" attribElement={"email"} />
            <br />

            <Field type="password" labelName="Password" placeholder="Password" attribElement={"password"} />
            <br />

            <Field type="password" labelName="Confirm Password" placeholder="Confirm Password" attribElement={"confirm_password"} />
            <br />
            <button onClick={submit} type="submit">Register</button>
        </div>
    )
}
