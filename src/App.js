import logo from './logo.svg';
import './App.css';

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
      list 
    </div>
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
