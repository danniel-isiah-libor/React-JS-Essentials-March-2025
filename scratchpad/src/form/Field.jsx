function Field(props) {
  const { label, type, onChange, name, errors } = props

  return (
    <div>
        <label>{label ?? 'Label'}:</label>
        <input 
          type={type ?? 'text'} 
          onChange={onChange}
          name={name}
          className="w-full p-2 border border-gray-300 rounded mb-4"
        />
        {
          (errors) && (
            errors[name] && <p style={{color: 'red'}}>{errors[name]}</p>
          )
        }
    </div>
  )
}

export default Field