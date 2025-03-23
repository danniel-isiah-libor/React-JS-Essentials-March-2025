import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function WeatherCard(props) {
  return (
    <Card className="w-[350px] justify-center text-center">
      <CardHeader>
        <CardTitle>
          {props.weather?.location}
        </CardTitle>
        <CardDescription>
          {props.weather?.date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            {props.weather?.icon}
          </div>
          <div className="flex flex-col space-y-1.5">
            {props.weather?.status}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
      {props.weather?.temperature}
      </CardFooter>
    </Card>
  )
}

export default WeatherCard