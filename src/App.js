import Additem from './Additem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useState } from 'react'

function App() {
  const year = new Date();
    const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);

    const [newItem, setNewItem] = useState('')

    const addItems = (item) =>{
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)
      localStorage.setItem("todo_list",JSON.stringify(listItems))
    }

    const handleCheck = (id) => {
        const listItems = items.map((item) => 
        item.id===id ? {...item, checked:!item.checked} : item
        )
        setItems(listItems);
        localStorage.setItem("todo_list",JSON.stringify(listItems))
    }
    const handleDelete = (id)=>{
        const deleteItems = items.filter((item) => 
            item.id!==id
        )
        setItems(deleteItems);
        localStorage.setItem("todo_list",JSON.stringify(deleteItems))
    }
    const handleSubmit = (e)=>{
      e.preventDefault();
      
      if(!newItem) return;
      console.log('submitted')
      setNewItem('')
      addItems(newItem)

    }

  return (
    <div className="App">
      <Header title='Daily Action Items'/>
      <Additem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit={handleSubmit}
      />
      <Content 
      items = {items}
      year = {year}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
      />
      <Footer 
      length = {items.length}
      />
    </div>
  );
}

export default App;
