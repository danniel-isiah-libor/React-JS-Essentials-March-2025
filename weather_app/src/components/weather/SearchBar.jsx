import React from 'react'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function SearchBar(props) {
  return (
    <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." onChange={(e) => (props.onChange(e.target.value))}/>
      <Button type="submit" onClick={props.onSearch}>Search</Button>
    </div>
  )
}

export default SearchBar