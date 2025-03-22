import { useReducer } from 'react'
import UserPost from './UserPost';

const initialPosts = [
    {
        title: "Post 1",
        body: "This is Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
        image: "https://picsum.photos/id/12/600"
    },
    {
        title: "Post 2",
        body: "This is Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
        image: "https://picsum.photos/id/13/600"
    },
    {
        title: "Post 3",
        body: "This is Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
        image: "https://picsum.photos/id/14/600"
    }
];

const reducer = (state, action) => {
    switch (action.type) {
        case 'DELETE': {
            const data = [...state]
            data.splice(action.index, 1)
            return data
        }
    }
}

export default function UserFeed() {

    const [posts, dispatch] = useReducer(reducer, initialPosts);

    const onDelete = (index) => {
        dispatch({ type: 'DELETE', index })
    }

    return (
        <>
            {posts.map((post, index) => (
                <UserPost key={index} post={post} index={index} onDelete={onDelete} />
            ))}
        </>
    )
}