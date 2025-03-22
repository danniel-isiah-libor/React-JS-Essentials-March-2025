import React, {useState,useEffect} from 'react'
import dashboardStyles from '../css/Dashboard.module.css'
import UsersTable from '../dashboard/UsersTable.jsx'
import Field from '../form/Field.jsx';

const defaultPost = {
    title:"",
    body:""
}

function Dashboard() {
    const [posts,setPosts] = useState([
        
    ]);
    const [post, setPost] = useState(defaultPost)
    const [errors, setErrors] = useState(defaultPost)

    useEffect(()=>{
         
    },[post])
    
    
    const styles = { 
        border: "1px solid red",
        marginBottom: "10px",
    }

    const addPost = ()=> {
        setPosts(prev=>{
            return [
                ...prev,
                {...post}
            ]
        })
        setPost(defaultPost)
        setErrors(defaultPost)
    }
    const validate = ()=>{
      
    }
    const onChange = (e)=> {
        //validate();
        setPost(prev=>{
            return {
                ...prev,
                [e.target.name]:e.target.value
            }
        })
    }   

  return (
    <>
        <div>
            <Field name="title" label="Title" onChange={onChange} value={post.title} errors={errors}/>
            <Field name="body" label="Body" onChange={onChange} value={post.body} errors={errors}/>
            <button onClick={addPost}>Add Post</button>
        </div>
        <div className="text-indigo-300">Dashboard</div>

        <br />
        
        <ul className={dashboardStyles.bgColor}>
            {
                posts.map((post, index) => {
                    return (
                        // <ListItem post={post}/>
                        <li style={styles} key={index}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    )
                })
            }
        </ul>

        <UsersTable/>
    </>
  )
}

export default Dashboard