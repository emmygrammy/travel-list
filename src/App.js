import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { Logo } from './component/Logo';
import { Stats } from './component/Stats';
import { Form } from './component/Form';
import { ParkingList } from './component/ParkingList';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];



function App() {
  const [items, setItems] = useState([...initialItems]);

  function handleAddItem(item){
    setItems((prevItems) => [...prevItems, item]);
  }
  function handleDeleteItem(id){
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  function handleToggleItem(id){
    setItems((prevItems) => prevItems.map((item) => item.id === id ? {...item, packed: !item.packed} : item));
  }
  function handleClearItems(){
    const confirmed = window.confirm('Are you sure you want to clear all items?');
    if (confirmed) setItems([]);
  }
  return (
    <div className="App">
      <Logo />
      <Form  onAddItem={handleAddItem} />
      <ParkingList items={items} 
      onDeleteItem={handleDeleteItem} 
      onToggleItem={handleToggleItem}
      onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
