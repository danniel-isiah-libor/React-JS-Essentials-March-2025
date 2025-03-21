import React from 'react'

export default function UserFeed() {

    const postFeedsArray = [
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

    const postFeedsObject = {
        user1: {
            title: "Post 1",
            body: "This is Post 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
            image: "https://picsum.photos/id/12/600"
        },
        user2: {
            title: "Post 2",
            body: "This is Post 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
            image: "https://picsum.photos/id/13/600"
        },
        user3: {
            title: "Post 3",
            body: "This is Post 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, eius!",
            image: "https://picsum.photos/id/14/600"
        }
    }

    return (
        <>
            Array
            {postFeedsArray.map((post, index) => {
                return (
                    <article className="my-5 overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white" key={index}>
                        <div className=" p-4">
                            <h3 className="mt-0.5 text-lg text-gray-900">{post.title}</h3>
                            <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {post.body}
                            </p>
                        </div>
                        <div className="p-4">
                            <img
                                alt=""
                                src={post.image}
                                className="h-[300px] w-full object-cover rounded-lg"
                            />
                        </div>
                    </article>
                )
            })}
            Object
            {Object.keys(postFeedsObject).map((key) => {
                return (
                    <article className="my-5 overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white" key={key}>
                        <div className=" p-4">
                            <h3 className="mt-0.5 text-lg text-gray-900">{postFeedsObject[key].title}</h3>
                            <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>
                            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                                {postFeedsObject[key].body}
                            </p>
                        </div>
                        <div className="p-4">
                            <img
                                alt=""
                                src={postFeedsObject[key].image}
                                className="h-[300px] w-full object-cover rounded-lg"
                            />
                        </div>
                    </article>
                )
            })}
        </>

    )
}
