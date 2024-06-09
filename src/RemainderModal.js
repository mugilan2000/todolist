import React, { useState } from 'react'

const RemainderModal = ({ isOpen, onClose, title, itemId, items, setItems }) => {

    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    if (!isOpen) return null;

    const handleRemainder = (event, id) => {
        event.preventDefault();

        console.log(id)

        if (date !== '' && time !== '') {

            console.log(date)
            console.log(time)

            var dateTimeString = date + ' ' + time;
            var scheduledTime = new Date(dateTimeString)
            var currentTime = new Date();
            var timeDiff = (scheduledTime.getTime() - currentTime.getTime());


            if(scheduledTime.getTime() > currentTime.getTime()){
                const listItems = items.map((item) =>
                    item.id === id ? { ...item, remainder: dateTimeString } : item
                )
                setItems(listItems);
    
                localStorage.setItem("todo_list", JSON.stringify(listItems))

            }


            console.log(dateTimeString)
            console.log(scheduledTime)
            console.log(currentTime)
            console.log(timeDiff)



            var timeoutIds = [];

            if (timeDiff > 0) {
                const timeoutID = setTimeout(function (id) {

                    const notification = new Notification(title, {
                        body: "come back"
                    })

                    const listItems = items.map((item) =>
                        item.id === id ? {...item, remainder: null } : item
                    )
                    console.log(itemId)
                    setItems(listItems);
                    localStorage.setItem("todo_list", JSON.stringify(listItems))

                    console.log(listItems)

                    notification.onclick = () => {
                        window.focus();
                    }
                    
                }, timeDiff)

                timeoutIds.push(timeoutID)

                
            }
            onClose();
            setDate('')
            setTime('')
            
        }
        else {
            alert("Please fill details");
        }
    }

    const handleInputChange = (e, type) => {
        switch (type) {
            case 'date':
                setDate(e.target.value)
                break;
            case 'time':
                setTime(e.target.value)
                break;
            default:
                break;
        }
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
                    background: "#F2FFFF",
                    height: 'auto',
                    width: 500,
                    margin: "auto",
                    padding: "2%",
                    borderRadius: "10px",
                    overflowY: "auto"

                }}
            >
                <form className='remainderForm' onSubmit={(e) => handleRemainder(e, itemId)}>
                    <h6 style={{ marginBottom: 15 + 'px' }}>Task Name - {title}</h6>
                    <div><label>Set Date - </label><input type='date' id='date' value={date} onChange={(e) => handleInputChange(e, 'date', itemId)}></input></div>
                    <div><label>Set Time - </label><input type='time' id='time' value={time} onChange={(e) => handleInputChange(e, 'time', itemId)}></input></div>
                    <div><button className='addRemainderBtn'>Set Remainder</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RemainderModal