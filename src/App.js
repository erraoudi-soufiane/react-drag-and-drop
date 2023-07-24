import './App.css';
import { DndProvider, useDrag } from 'react-dnd';
import DraggableArea from './components/DraggableArea';
import DraggableItem from './components/DraggableItem';
import { useState } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';

function App() {

  const [items, setItems] = useState([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    // Add more items as needed
  ]);

  const handleDrop = (itemId) => {
    // Handle the drop event here, you can update the state or perform other actions
    console.log('Item dropped:', itemId);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="app">
        <div className="draggableItem">
          {items.map((item) => (
              <DraggableItem key={item.id} item={item} />
            ))}
        </div>

        <div className="draggableArea">
          <DraggableArea onDrop={handleDrop} />
        </div>
      </div>
    </DndProvider>
  );
}

export default App;
