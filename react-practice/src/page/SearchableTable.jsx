import React from 'react'
import SearchBar from './SearchBar'
import TableHeader from './TableHeader'
import Table from './Table.jsx'
import Row from './Row.jsx'

export default function SearchableTable({header}) {
  let data = [
    {
      name:"Gerald",
      username:"gorzal",
      email:"geraldorzal18@gmail.com"
    },
    {
      name:"Random",
      username:"gorzal",
      email:"geraldorzal18@gmail.com"
    }
    
  ]

  const search = (itemToSearch)=>{
    
    const filtered = data.filter((s)=>s.name.toLowerCase().includes(itemToSearch.toLowerCase()));
    
    console.log(filtered)
  };
  return (
    <div>
      <SearchBar
          onClick={search}
      />
      <Table
      

      >
        <TableHeader
          header={header}
        />
        <tbody id="tbody">

        {
            data.map((row,index)=><Row
                  key={index}
                  items={row}
            />)
        }
        </tbody>
      
      </Table>
          
      

    </div>
    
  )
}
