import React,{useEffect, useState} from 'react'
import * as Yup from 'yup'
import Field from '../form/Field'

const fields = {
  title:"",
  body:""
}

export default function CreatePost() {
  const [form, setForm] = useState(fields)
  const [errors, setErrors] = useState({})
  const [validated, setValidated] = useState(false)

  const schema = Yup.object().shape({
    title:Yup.string().required("Title is required"),
    body:Yup.string().required(),
  });

useEffect(() => {
  
  if(!validated){
    validate();
  }
  
}, [validated])



  const onChange = async (e)=>{
    setForm(prev=>{
      return{
        ...prev,
        [e.target.name]:e.target.value
      }
    })
  
    
    setErrors(val=>{
      return {
        ...val,
        [e.target.name]: ""
      }
    })
    
   
  }
  const validate = async ()=>{

    return  schema.validate(form,{abortEarly:false}).then((val)=>true).catch((e)=>{
      e.inner.map((val)=>{
        
        setErrors((prev)=>({
          ...prev,
          [val.path]:val.message
        }))
      })
      return false;
    }).finally(()=>{
      setValidated(true)
    })

  }


  const submit = async (e)=>{
      const d = await validate();
      if(d){
        alert("SUBMIT")
      }
  }

  return (
    <>
      <div>CreatePost</div>
      <Field
        type="text"
        name="title"
        label="Title"
        onChange={onChange}
        value={form.title}
        errors={errors}
      />
      <br/>
      <Field
        type="text"
        name="body"
        label="Body"
        onChange={onChange}
        value={form.body}
        errors={errors}
      />
      <button onClick={submit}>Submit</button>
    </>

  )
}
