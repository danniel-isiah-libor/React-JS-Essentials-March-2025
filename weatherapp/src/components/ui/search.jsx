import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useRef } from "react"

export function Search(props) {
    const toSearch = useRef('');
    const {btnName, onSearch} = props


  return (
    <div className="flex flex-col space-y-2 w-full max-w-sm items-center ">
      <Input ref={toSearch} type="email" placeholder="Email" />
      <Button type="submit" className="w-full" onClick={() => onSearch(toSearch)}>{btnName ?? "Button"}</Button>
    </div>
  )
}
