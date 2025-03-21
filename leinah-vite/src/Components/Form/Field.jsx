import Label from "../Basic/Label.jsx";

export default function Field({ type, labelName, placeholder, attribElement }) {
    return (
        <>
            <Label htmlFor={attribElement} labelName={labelName ?? 'Label'} />
            <input type={type ?? 'text'} name={attribElement} id={attribElement} placeholder={placeholder} />
        </>
    )
}
