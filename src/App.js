import Additem from './Additem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import { useState } from 'react';

function App() {
  const year = new Date();
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')) || []);

  const [newItem, setNewItem] = useState('')

  const [activeDrag, setActiveDrag] = useState(null)

  // useEffect(() => {
  //   JSON.parse(localStorage.getItem('todo_list'))
  // }, [])

  const addItems = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item, remainder:null, draggableItem: null }
    const listItems = [...items, addNewItem]
    setItems(listItems)

    localStorage.setItem("todo_list", JSON.stringify(listItems))
  }

  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems);

    localStorage.setItem("todo_list", JSON.stringify(listItems))

  }
  const handleDelete = (id) => {
    const deleteItems = items.filter((item) =>
      item.id !== id
    )
    setItems(deleteItems);

    localStorage.setItem("todo_list", JSON.stringify(deleteItems))
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;
    setNewItem('')
    addItems(newItem)

  }

  const onDrop = (position) => {
    console.log(position)
  }

  const openSetRemainderWindow = () =>{
      
  }

  return (
    <div className="App">
      {/* <Header title='Daily Action Items' /> */}
      <Additem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
        year={year}
        length={items.length}
      />
      <Content
        items={items}
        setItems = {setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
        openSetRemainderWindow = {openSetRemainderWindow}
        setActiveDrag = {setActiveDrag}
        onDrop={onDrop}
        activeDrag = {activeDrag}
      />

      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
