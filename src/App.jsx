import './App.css'
import Counter from './Counter';
import Friends from './Friends';
import Users from './Users';

function App() {
  
  function handleClick(){
    alert('button clicked');
  }

  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>
      <h2>React Core Concepts 2</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2</button>
      <button onClick={()=>{alert('button 3 clicked')}}>Click3</button>
    </>
  )
}

export default App
