import React, {useState} from 'react'
import * as Yup from 'yup'
import InputField from "../form/InputField.jsx";
const fields = {
  title: "",
  body: ""
}

function CreatePost() {
  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState({})
  const [validated,setValidated] = useState(false)

  const schema = Yup.object().shape({
    title: Yup.string().required(),
    body: Yup.string().required()
  })

  const onChange = async (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: "", 
    }));
  }
  const submit = async() => {
    const validated = await validate()
    console.log(validated);
    alert(JSON.stringify(form))
    // console.log(errors);  
  }

  const validate = () => {
        return schema.validate(form, { abortEarly: false })
      .then(() => true)
      .catch((e) => {
        e.inner.map((value) => {
          setErrors((prev) => ({
           ...prev,
           [value.path]: value.message
         }))
        })
        
        return false
      })
    .finally()
  }

  return (
    <>
      <div className='text-3xl font-semibold'>Create  Post</div>
      <label htmlFor="">Title</label>
      <input type="text" name="title" onChange={onChange} className='border rounded-sm m-3' />
      {errors && errors.title && <p className="text-red-500">{errors.title}</p>}
      <br />
      <label htmlFor="">Body</label>
      <textarea name="body" onChange={onChange} className='border rounded-sm m-3'></textarea>
      {errors && errors.body && <p className="text-red-500">{errors.body}</p>}
      <br />
      <button onClick={submit} className='border rounded-sm p-2 px-4 bg-white text-black tracking-widest font-semibold'>Submit</button>
    </>
  );
}

export default CreatePost