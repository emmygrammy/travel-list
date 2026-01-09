import logo from './logo.svg';
import './App.css';

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 2, description: "charger", quantity: 1, packed: false },
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
  return(
    <div className='add-form'>
      <h3> what do you want for your 😍 trip? </h3>
    </div>
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
