import React from 'react'
import Button from '../Basic/Button'
const UserDetails = () => {
    return (
        <div
            className="items-center bg-white rounded-b-2xl p-4 sm:p-6 lg:p-8"
        >

            <div className="grid grid-cols-12 gap-3">
                <div className="col-span-2">
                    <img
                        alt=""
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                        className="h-[200px] rounded-lg object-cover shadow-xs"
                    />
                </div>
                {/* Names */}
                <div className="col-span-5 flex flex-col mt-auto gap-3">
                    <div>
                        <p className="font-bold text-gray-900 text-3xl">
                            John Doe
                        </p>
                        <p className="font-bold text-gray-500 text-base">
                            @jdoe12
                        </p>

                        <p>Software Engineer and Fashion Designer</p>
                        <p>Based in Manila</p>
                    </div>
                    <div className='flex gap-3'>
                        <Button href={"#"} btnName={"Follow"} className={"bg-black text-white"} />
                        <Button href={"#"} btnName={"Get in touch"} className={"bg-white text-black border border-black"} />
                    </div>
                </div>
                {/* Followers */}
                <div className="col-span-5 mt-auto gap-3">
                    <div className="grid grid-cols-12 gap-3">
                        <div className="col-span-4">
                            <p>Followers</p>
                            <p className='text-4xl font-bold'>2654</p>
                        </div>
                        <div className="col-span-4">
                            <p>Following</p>
                            <p className='text-4xl font-bold'>531</p>
                        </div>
                        <div className="col-span-4">
                            <p>Likes</p>
                            <p className='text-4xl font-bold'>12.6k</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default UserDetails