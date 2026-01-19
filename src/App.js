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

  return (
    <div className="App">
      <Logo />
      <Form  onAddItem={handleAddItem} />
      <ParkingList items={items} onDeleteItem={handleDeleteItem} />
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
function ParkingList({items, onDeleteItem}){
  return(
    <div className='list'>
    <ul>
      {items.map((item) => (
        <Item key={item.id} item={item} onDeleteItem={onDeleteItem} />
      ))}
    </ul>
      </div>
  )
}

function Item({item, onDeleteItem}){
  return(
    <li>
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
        💼you have {numItems} item on your list and you have already parked {numPacked} ({percentage}%)
      </em>
    </footer>
  )
}
export default App;
