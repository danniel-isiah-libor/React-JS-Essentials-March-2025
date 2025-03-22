import React, { useState } from "react";
import Table from "../tablecomponents/Table";

const fields = {
  title: "",
  body: "",
};

function Dashboard() {
  const [form, setForm] = useState(fields); 
  const [posts, setPosts] = useState([]); 
  function post() {
    if (form.title && form.body) {
      setPosts((prevPosts) => [
        ...prevPosts,
        { title: form.title, body: form.body },
      ]);
      setForm(fields); 
    }
  }

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <>
      <h1>Dashboard</h1>
      <div>
        <input
          type="text"
          name="title"
          placeholder="Enter title"
          value={form.title}
          onChange={onChange}
        />
        <input
          type="text"
          name="body"
          placeholder="Enter body"
          value={form.body}
          onChange={onChange}
        />
        <button type="button" onClick={post}>
          Post
        </button>
      </div>
      <br />
      <ul>
        {posts.map((post, index) => {
          return (
            <li
              key={index}
              className="border-1 m-10 rounded-lg p-5 w-1/3 mx-auto bg-white text-black"
            >
              <div className="flex space-x-3">
                <img
                  src={`//unsplash.it/seed/hf/500`}
                  className="size-10 rounded-full ring-3 ring-blue-400"
                  alt="Post"
                />
                <div>
                  <h1>{post.title}</h1>
                  <p className="text-xs text-start text-blue-400">
                    Post an update
                  </p>
                </div>
              </div>
              <div className="text-start p-2">
                <h3>{post.body}</h3>
                <p className="text-xs text-zinc-500">{post.body}</p>
                <img
                  src={`//unsplash.it/seed/hf/500`}
                  className=" "
                  alt="Image"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dashboard;
