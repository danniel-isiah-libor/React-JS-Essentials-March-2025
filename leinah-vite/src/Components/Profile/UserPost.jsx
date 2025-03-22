import React from 'react'

export default function UserPost(props) {
    return (
        <article className="my-5 overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg bg-white">
            <div className=" p-4">
                <h3 className="mt-0.5 text-lg text-gray-900">{props.post.title}</h3>
                <time dateTime="2022-10-10" className="block text-xs text-gray-500"> 10th Oct 2022 </time>

                <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
                    {props.post.body}
                </p>
            </div>
            <div className="p-4">
                <img
                    alt=""
                    src={props.post.image}
                    className="h-[300px] w-full object-cover rounded-lg"
                />
            </div>

            <div className="px-4 pb-2">
                <button onClick={props.onDelete} className="btn p-3 bg-red-400 rounded-lg text-white cursor-pointer">Delete</button>
            </div>
        </article>
    )
}
