import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchBar(props) {
  return (
    <div className="mx-auto max-w-xl w-full items-center space-x-2 mt-10 flex">
      <Input type="text" placeholder="Search for a city" onChange={(e) => (props.onChange(e.target.value))}/>
      <Button type="submit" onClick={props.onSearch}>Search</Button>
    </div>
  )
}

export default SearchBar