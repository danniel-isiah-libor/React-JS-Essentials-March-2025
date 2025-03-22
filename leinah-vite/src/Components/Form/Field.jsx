import Label from "../Basic/Label.jsx";

export default function Field({ type, labelName, placeholder, attribElement, value, onChange, errors }) {
    return (
        <>
            <label htmlFor={attribElement} >
                <span className="text-sm font-medium text-gray-700">{labelName ?? 'Label'}</span>
                <input
                    className="w-full border border-gray-400 rounded shadow-sm"
                    type={type ?? 'text'}
                    name={attribElement}
                    id={attribElement}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                />
                {
                    (errors) && (
                        errors[attribElement] && <span style={{ color: 'red' }}>{errors[attribElement]}</span>
                    )
                }
            </label>
        </>
    )
}
