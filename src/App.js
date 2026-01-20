import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];



function App() {
  const [items, setItems] = useState([]);

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

function Logo(){
  return(
    <div className='logo'>
    <h1> 🌴 Far away 👜 </h1>
    </div>
  )
}
function Form({onAddItem}){
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);
  
  function handleSubmit(e){
    e.preventDefault();

     if (!description) return;
    
     const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    }
    console.log(newItem);
    onAddItem(newItem);

    setDescription('');
    setQuantity(1);
  }

  return(
    <form className='add-form' onSubmit={handleSubmit}>
      <h3> what do you want for your 😍 trip? </h3>
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>

      <input type='text' placeholder='item ....' value={description} onChange={(e) => setDescription(e.target.value)} />
      <button>Add</button>

    </form>
  )
}
function ParkingList({items, onDeleteItem, onToggleItem, onClearItems }){
 
  const [filter, setFilter] = useState('all');
  const filteredItems = items.filter((item) => {
    if (filter === 'all') return true;
    if (filter === 'packed') return item.packed;
    if (filter === 'unpacked') return !item.packed;
  })
  return(
    <div className='list'>
    <ul>
      {filteredItems.map((item) => (
        <Item key={item.id} item={item} 
        onDeleteItem={onDeleteItem} 
        onToggleItem={onToggleItem} />
      ))}
    </ul>

     <div>
      <select>
        <option value='all'>All</option>
        <option value='packed'>Packed</option>
        <option value='unpacked'>Unpacked</option>
      </select>

     </div>
    <div className='clear'>
      <button onClick={() => onClearItems()}>Clear all</button>
    </div>

    </div>
  )
}

function Item({item, onDeleteItem, onToggleItem}){
  return(
    <li>
      <input type='checkbox' checked={item.packed} onChange={() => onToggleItem(item.id)} />
      <span style={{textDecoration: item.packed ? 'line-through' : 'none'}}>
        {item.quantity} {item.description}
        </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  )
}

function Stats({items}){
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentage = Math.round(numPacked / numItems * 100);

  return(
    <footer className='stats'>
      <em>
        {numItems === 0 ?
         'No items, please start parking your items' : `you have ${numItems} item on your list and you have already parked ${numPacked} (${percentage}%)`
         }
      </em>
    </footer>
  )
}
export default App;
