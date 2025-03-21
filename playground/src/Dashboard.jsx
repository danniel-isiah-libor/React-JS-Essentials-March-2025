import React from 'react'
import dashboardStyles from './Dashboard.module.css'

function Dashboard() {
    const posts = [
        {
            title: 'Learning React',
            body: 'React is a JavaScript library for building user interfaces.'
        },
        {
            title: 'Understanding State',
            body: 'State is a built-in object that stores property values that belong to a component.'
        },
        {
            title: 'Props in React',
            body: 'Props are arguments passed into React components.'
        }
    ];

    const styles = { 
        border: "1px solid red",
        marginBottom: "10px",
    }

  return (
    <>
        <div className="text-indigo-300">Dashboard</div>

        <br />

        <ul className={dashboardStyles.bgColor}>
            {
                posts.map((post) => {
                    return (
                        // <ListItem post={post}/>
                        <li style={styles}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </li>
                    )
                })
            }
        </ul>
    </>
  )
}

export default Dashboard