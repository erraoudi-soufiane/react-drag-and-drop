import React from 'react'
import { useDrop } from 'react-dnd';

function DraggableArea({ onDrop }) {

    const [{ isOver }, drop] = useDrop({
        accept: 'ITEM',
        drop: (item, monitor) => {
          onDrop(item.id);
        },
        collect: (monitor) => ({
          isOver: monitor.isOver(),
        }),
      });

  return (
    <div ref={drop} className='draggableArea'></div>
  )
}

export default DraggableArea