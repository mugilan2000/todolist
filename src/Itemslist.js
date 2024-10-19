import React from 'react'
import Listitem from './Listitem'


const Itemslist = ({ items, handleCheck, handleDelete, openSetRemainderWindow, setItems, setActiveDrag, activeDrag }) => {
    return (
        <tbody>
            
            {items.map((item, index) => (
                
                    <Listitem
                        item={item}
                        items={items}
                        setItems={setItems}
                        handleCheck={handleCheck}
                        handleDelete={handleDelete}
                        openSetRemainderWindow={openSetRemainderWindow}
                        setActiveDrag={setActiveDrag}
                        index = {index}
                        activeDrag = {activeDrag}
                    />
                    
                

            ))}
        </tbody>
    )
}

export default Itemslist