import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "charger", quantity: 1, packed: false },
];



function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <ParkingList />
      <Stats />
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
function Form(){
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
function ParkingList(){
  return(
    <div className='list'>
    <ul>
      {initialItems.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ul>
      </div>
  )
}

function Item({item}){
  return(
    <li>
      <span style={{textDecoration: item.packed ? 'line-through' : 'none'}}>
        {item.quantity} {item.description}
        </span>
      <button>❌</button>
    </li>
  )
}


function Stats(){
  return(
    <footer className='stats'>
      <em>
        💼you have x item on your list and you have already parked x (x%)
      </em>
    </footer>
  )
}
export default App;
