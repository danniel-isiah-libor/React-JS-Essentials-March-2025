import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function BottomNew({ data }) {
    return (
        <div className="grid w-full max-w-screen-xl grid-cols-12 gap-3 justify-end mx-auto mb-10">
            <div className="col-span-4">
                <Card className={`h-full text-white w-full bg-green-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-0`}>
                    <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription className={"text-sm text-white italic"}>Card Description</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Card Content</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
