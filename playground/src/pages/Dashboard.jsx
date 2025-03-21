import dashboardStyles from '../css/Dashboard.module.css'

function Dashboard() {

    const posts = [
        {
            title: 'Post 1',
            body: 'This is post 1'
        }, 
        {
            title: 'Post 2',
            body: 'This is post 2'
        },
        {
            title: 'Post 3',
            body: 'This is post 3'
        }  
    ] 

    const  styles ={
        border: "1px solid red",
        marginBottom: "10px"
    }


  return (
    <>
        <div className="text-cyan-800">Dashboard</div>
        <br/>
        
        <ul>
            {
                posts.map((post) => {
                    return(
                        <li style = {styles}  className={dashboardStyles.bgColor}>
                            {/* ListItem post={post} */}
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
