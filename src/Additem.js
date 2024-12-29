import React, { useEffect, useRef, useState } from 'react'

const Additem = ({ newItem, setNewItem, handleSubmit, year, length }) => {

  const inputRef = useRef();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const [greetings, setGreetings] = useState('')

  useEffect(() => {
    
      greetingsFunc();
    
  })

  const name = localStorage.getItem('todo_name')

  const greetingsFunc = () => {
    if (year.getHours() < 12) {
      setGreetings("Good Morning")
    }
    else if (year.getHours() >= 12 && year.getHours() <= 15) {
      setGreetings("Good Afternoon")
    }
    else if (year.getHours() >= 15 && year.getHours() <= 20) {
      setGreetings("Good Evening")
    }
    else {
      setGreetings("Good Night")
    }
  }
  return (
    <div>
      <div className='headerName'>
        <h4 className='headerName'>{greetings} {name},</h4>
        <h4 className='dateTime'> {days[year.getDay()]}, {year.getDate()} {months[year.getMonth()]}</h4>
      </div>
      <div className='headerItem'>

        <form className='itemForm' onSubmit={handleSubmit}>
          <input type='text' autoFocus placeholder='Add Your Task' ref={inputRef} value={newItem} onChange={(e) => setNewItem(e.target.value)} required />
          <button type='submit' className='btn' onClick={() => inputRef.current.focus()}><i class="fa-solid fa-plus"></i></button>
        </form>
      </div>
      <h3 className='taskcount'>{length} {length === 1  ? 'task' : 'tasks'}</h3>
    </div>
  )
}

export default Additem