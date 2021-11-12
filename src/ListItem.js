import React from 'react'
import './ListItem.css'
export default function ListItem(props) {
    const items= props.items
    const ListItems = items.map(item=>
        {
           return <div className="list" key={item.key}>
               <p>{item.text} 
               <span>
               <button className="delete"
               onClick={()=>props.deleteItem(item.key)}>Remove</button> 
               </span></p>
               

               
               
           </div>
    })
    return (
       
        <div>
            
            {ListItems}
        </div>
    )
}
