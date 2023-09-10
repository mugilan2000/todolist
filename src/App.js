import Additem from './Additem';
import './App.css';
import Content from './Content';
import Footer from './Footer';
import Header from './Header';
import { useEffect, useState } from 'react'
import apiRequest from './apiRequest';

function App() {
  const API_URL = "https://my-json-server.typicode.com/mugilan2000/todolist/items";
  const year = new Date();
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('')

  const [fetchError, setFetchError] = useState(null);

  const[isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw Error("Data not received from Server");
        console.log(response);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
        setFetchError(null);
      } catch (err) {
        setFetchError(err.message);
      }
      finally{
        setIsLoading(false);
      }
    }
    setTimeout(() => {
      (async () => await fetchItems())()
    }, 2000);
    
  }, [])

  const addItems = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const addNewItem = { id, checked: false, item }
    const listItems = [...items, addNewItem]
    setItems(listItems)

    const postOptions = {
      method: 'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify(addNewItem)
    }

    const result = await apiRequest(API_URL, postOptions)
    if(result) setFetchError(result)
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id)
    const patchOptions = {
      method: 'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({checked:myItem[0].checked})
    }

    const reqURL = `${API_URL}/${id}`;

    const result = await apiRequest(reqURL, patchOptions)
    if(result) setFetchError(result)

  }
  const handleDelete = async (id) => {
    const deleteItems = items.filter((item) =>
      item.id !== id
    )
    setItems(deleteItems);

    const deleteOptions = {
      method: 'DELETE'
    }

    const reqURL = `${API_URL}/${id}`;

    const result = await apiRequest(reqURL, deleteOptions)
    if(result) setFetchError(result)

  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!newItem) return;
    setNewItem('')
    addItems(newItem)

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
      <main>
        {isLoading && <div class="dots"></div>}
        {fetchError && <p className='fetcherror'>{`Error: ${fetchError}`}</p>}
        {!isLoading && !fetchError && <Content
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer
        length={items.length}
      />
    </div>
  );
}

export default App;
