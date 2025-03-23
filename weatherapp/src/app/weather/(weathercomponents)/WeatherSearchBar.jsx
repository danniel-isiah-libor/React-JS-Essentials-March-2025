'use client'
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
export default function WeatherSearchBar({onSearch}) {
  const data = useRef('')

  return (
    <div className="flex flex-row p-5">
      <Input placeholder="Search" 
          onChange={(e)=>{
            data.current = e.target.value
          }}
      />
      <Button className="ml-2"
        onClick={()=>{
          onSearch(data)
        }}
      >Search</Button>
    </div>
  );
}
