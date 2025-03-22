function Field(props) {
  const { label, type, onChange, name } = props

  return (
    <div>
        <label>{label ?? 'Label'}:</label>
        <input 
          type={type ?? 'text'} 
          onChange={onChange}
          name={name}
        />
    </div>
  )
}

export default Field