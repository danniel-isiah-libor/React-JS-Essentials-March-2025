import dashboardStyles from '../css/Dashboard.module.css'
import {useState,useEffect} from 'react'
function Dashboard() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [inputList, setInputList] = useState([]);
    const [errors, setErrors] = useState({
        title: "",
        body: "",
      });
      
    useEffect(() => {
        console.log("Input List Updated:", inputList);
      }, [inputList]);


     const handleSubmit = () => {
    if (!title || !body) {
      // Validation check: Both input fields should have values
      alert("Both input fields must be filled!");
      return; // If any input is empty, stop the submission
    }

    // Add the inputs to the list if both are filled
    setInputList((prevList) => [
      ...prevList,
      { title, body }, // Add the new input values to the list
    ]);

    // Clear inputs after submission
    setTitle("");
    setBody("");
     };

    const  styles ={
        border: "1px solid red",
        marginBottom: "10px"
    }


//   return (
//     <>
//         <div className="text-cyan-800">Dashboard</div>
//         <br/>
        
//         <ul>
//             {
//                 posts.map((post) => {
//                     return(
//                         <li style = {styles}  className={dashboardStyles.bgColor}>
//                             {/* ListItem post={post} */}
//                             <h3>{post.title}</h3>
//                             <p>{post.body}</p>
//                         </li>
//                     )
//                 })
//             }

//         </ul>
//     </>
//   )

return (
    <div>
      <h2>Input List</h2>

      {/* Input 1 */}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update input1 state
        placeholder="Enter first value"
      />

      {/* Input 2 */}
      <input
        type="text"
        value={body}
        onChange={(e) => setBody(e.target.value)} // Update input2 state
        placeholder="Enter second value"
      />

      {/* Submit button */}
      <button onClick={handleSubmit}>Submit</button>

      {/* Render the list of inputs */}
      <div>
        <h3>Submitted Inputs:</h3>
        <ul>
          {inputList.map((item, index) => (
            <li key={index}>
              {item.title} - {item.body}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

}

export default Dashboard
