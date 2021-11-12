import React, { Component } from 'react'
import ListItem from './ListItem'
export class Comp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            currentItem:{
                text:'',
                key:''
            },
            items: []
             
        }
    }
    
    addItem=e=>{
        e.preventDefault();
        const newItem=this.state.currentItem;
        console.log(newItem)
        if(newItem.text!==""){
            const newItems=[...this.state.items, newItem]
            this.setState({
                items:newItems,
                currentItem:{
                    text:'',
                    key:''
                }
            })
        }
        }

        
    handleInput=e=>{
      this.setState({
          currentItem:{
              text:e.target.value,
              key:1+Math.random()
          }
      })  
    }
    deleteItem=(key)=>{
        const filteredItems = this.state.items.filter(item=>
            item.key!==key)
            this.setState({
                items:filteredItems
            })
    }
    setUpdate=(text, key)=>{
       const items = this.state.items
       items.map(item=>{
           if(item.key===key){
               item.text=text
           }
       })
       this.setState({
           items:items
       })
    }
    render() {
        return (
            <div className="App">
            <header>
                <form id="todo" onSubmit={this.addItem}>
                    <input type="text" placeholder="Add task"
                    value={this.state.currentItem.text}
                    onChange={this.handleInput}></input>
                    <button type="submit">AddItem</button>
                </form>
            </header>
         <ListItem items={this.state.items}
         deleteItem={this.deleteItem}
         ></ListItem>
            </div>
        )
    }
}

export default Comp
