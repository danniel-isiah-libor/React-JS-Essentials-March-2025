import Field from "../Components/Form/Field.jsx";

export default function Login() {
    return (
        <div>
            <Field type="text" labelName="Username" placeholder="Username" attribElement={"username"} />
            <br />

            <Field type="password" labelName="Confirm Password" placeholder="Confirm Password" attribElement={"confirm_password"} />
            <br />
            <button type="submit">Log In</button>
        </div>
    )
}
