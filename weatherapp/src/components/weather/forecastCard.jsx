import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export function ForecastCard(props) {
  const {weather} = props

  console.log(weather)
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle className="text-center text-xl">{weather?.location ?? weather.date }</CardTitle>
        <CardDescription  className="text-center">{weather.date ?? ""}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <img src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}/>
            <p className="self-center">{weather?.status}</p>
            <p className="self-center">{`${weather?.temperature} °C`} </p>
          </div>
          
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        
      </CardFooter>
    </Card>
  );
}
