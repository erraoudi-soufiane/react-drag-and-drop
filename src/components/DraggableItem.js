import React from 'react'
import { useDrag } from 'react-dnd'

function DraggableItem({ item }) {

    const [{ isDragging }, drag] = useDrag({
        type: 'ITEM', 
        item: { id: item.id, name: item.name }, 
        collect: (monitor) => ({
          isDragging: monitor.isDragging(),
        }),
      });

  return (
    <div ref={drag} className='draggableItem'>{item.name}</div>
  )
}

export default DraggableItem