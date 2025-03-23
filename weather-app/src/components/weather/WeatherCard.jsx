import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useSelector } from 'react-redux';

function WeatherCard(props) {
  const weather = useSelector(state => state.weather)

  console.log(weather);

  return (
    <Card className="w-[350px] justify-center text-center">
      <CardHeader>
        <CardTitle>
          {props.weather?.name}
        </CardTitle>
        <CardDescription>
          {props.weather?.dt}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5 justify-center text-center">
            <img 
              className="mx-auto"
              width="100"
              src={`http://openweathermap.org/img/w/${props.weather?.weather[0].icon}.png`}
            />
          </div>
          <div className="flex flex-col space-y-1.5">
            {props.weather?.weather[0].description}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center">
      {props.weather?.main.temp}°C
      </CardFooter>
    </Card>
  )
}

export default WeatherCard