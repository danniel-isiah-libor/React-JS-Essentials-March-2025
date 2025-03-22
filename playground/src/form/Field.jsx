function Field(props) {
  const { label, type, onChange, name, errors,value } = props

  return (
    <div>
        <label>{label ?? 'Label'}:</label>
        <input 
          type={type ?? 'text'} 
          onChange={onChange}
          name={name}
          value={value}
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