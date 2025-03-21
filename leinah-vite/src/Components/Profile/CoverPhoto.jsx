import React from 'react'

export default function CoverPhoto() {
    return (
        <section>
            <div className="mx-auto max-w-screen-full">
                <div className="space-y-4 md:space-y-8">
                    <img
                        src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        className="h-[300px] w-full object-cover"
                        alt=""
                    />
                </div>
            </div>
        </section>

    )
}
