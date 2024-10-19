import React, { useEffect, useState } from 'react'
import closeIcon from './close.svg' 

const NameModal = ({uname, setUname}) => {

    const [nameInput, setNameInput] = useState('')

    const handleInputChange = (e) => {

        setNameInput(e.target.value)
    }

    const handleEdit = (e) => {
        e.preventDefault()

          localStorage.setItem("todo_name", nameInput)

        setNameInput(nameInput)
        window.location.reload();
    }

  return (
    <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(0, 0, 0, 0.5)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflowY: "auto"

            }}
        >
            <div
                style={{
                    background: "#FCFCFC",
                    height: 'auto',
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    borderRadius: "10px",
                    overflowY: "auto"

                }}
            >
                
                <form className='editForm' onSubmit={(e) => handleEdit(e)} >  { /*onSubmit={(e) => handleRemainder(e, itemId)} */}
                <h6 style={{ marginBottom: 15 + 'px' }}>Name Prompt</h6>
                <div><label>Enter Your Name - </label><input type='text' required id='nameInput' onChange={(e) => handleInputChange(e)}></input></div>
                <div><button className='editUpdateBtn'>Enter into App</button>
                    
                    </div>
                </form>
                
            </div>
        </div>
  )
}

export default NameModal