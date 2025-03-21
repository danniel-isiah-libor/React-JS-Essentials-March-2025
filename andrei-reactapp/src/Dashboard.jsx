import React from 'react'

function Dashboard() {
  const posts = [
    {
      name: "Andrei Parquez",
      title: "Post 1",
      body: "This is post 1",
    },
    {
      name: "Andrei Parquez",
      title: "Post 2",
      body: "This is post 2",
    },
    {
      name: "Andrei Parquez",
      title: "Post 3",
      body: "This is post 3",
    },
  ];
  return (
    <> <h1>Dashboard</h1>
      <br />
      <ul>
        {
          posts.map((post,index) => {
            return (
              // <ListItem post={post}/>
              <li className="border-1 m-10 rounded-lg p-5 w-1/3 mx-auto bg-white text-black">
                <div className="flex space-x-3">
                  <img
                    src={`//unsplash.it/seed/hf${index}/500`}
                    className="size-10 rounded-full ring-3 ring-blue-400"
                  />
                  <div>
                    <h1>{post.name}</h1>
                    <p className="text-xs text-start text-blue-400">post an update</p>
                  </div>
                </div>

                <div className="text-start">
                  <h3>{post.title}</h3>
                  <p className='text-xs text-zinc-500'>{post.body}</p>
                  <img
                    src={`//unsplash.it/seed/hf${index}/500`}
                    className=" "
                  />
                </div>
              </li>
            );
        })
        }
      </ul>
    </>
    
  )
}

export default Dashboard