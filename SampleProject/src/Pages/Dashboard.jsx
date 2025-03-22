import React, { useEffect, useState } from "react";
// import dashboardStyle from '../css/Dashboard.module.css'
// import Table from "../components/dashboard/Table";
// import Search from "../components/Search";
import UsersTable from "../components/dashboard/UsersTable";
import Field from "../Forms/Field";

const fields = {
  title: "",
  body: "",
};

let firstRender = true;
export default function Dashboard() {
  const [form, setForm] = useState(fields);
  const [errors, setErrors] = useState(fields);
  const [validated, setValidated] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!firstRender) {
      const hasErrors =
        Object.values(errors).filter((err) => err !== "").length !== 0;
        
      if (hasErrors) {
        console.log("HAS ERROR", hasErrors)
       setValidated(false)
      }else{
        setValidated(true)
      }
    }
  }, [errors]);


  useEffect(() => {
    if(!firstRender){
      validate();
    }
  }, [form])
  useEffect(() => {}, [form]);
  const onChange = (e) => {
    const { name, value } = e.target;
    firstRender = false
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    
  };

  const onPost = () => {
    firstRender = false
    console.log("Validated?", validated)
    if (validated) {
      setPosts(prev => ([
        ...prev,
        form
      ]));
      setForm(fields);
      firstRender = true
      setValidated(false)
      setErrors(fields)
    } else {
      alert("HAS ERROR");
    }
    
  };

  const validate = () => {

    console.log("!form.title", !form.title)
    if (!form.title) {
      console.log("HERE")
      setErrors((prev) => ({
        ...prev,
        title: "Title is Required!",
      }));
    }else{
      console.log("HERE1")
      setErrors((prev) => ({
        ...prev,
        title: "",
      }));
      
    }
    if (!form.body) {
      setErrors((prev) => ({
        ...prev,
        body: "Body is Required!",
      }));
    }else{
      setErrors((prev) => ({
        ...prev,
        body: "",
      }));
    }

  };

  const styles = {
    border: "1px solid",
    marginBottom: "5px",
    paddingLeft: "5px",
    paddingRight: "5px",
  };

  return (
    <div className="p-5 flex flex-col space-y-5">
      <h1 className="text-3xl font-medium ">Dashboard</h1>
      <br />
      <div className="flex flex-col space-y-3 ">
        <Field
          label="Title"
          className="flex flex-row space-x-2 w-full"
          name="title"
          onChange={onChange}
        />
        {errors && errors.title && <p className="text-red-500">{errors?.title}</p>}
        <div className="">
          <label>Body :</label>
          <textarea
            onChange={onChange}
            name="body"
            className="px-3 py-2 border rounded w-full"
          />
        </div>
        <button
          className="self-start cursor-pointer border border-gray-500 px-2 py-1 rounded"
          onClick={onPost}
        >
          Post
        </button>
      </div>
      <ul className="flex flex-col space-y-2">
        {posts.length !== 0 &&
          posts.map((post, index) => {
            return (
              <li key={index} className="border bg-sky-200 px-3 py-1 rounded">
                <h3>{post?.title}</h3>
                <p>{post?.body}</p>
              </li>
            );
          })}
      </ul>
      <UsersTable />
    </div>
  );
}
