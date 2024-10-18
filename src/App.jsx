
import './App.css'
import Counter from './counter';
import Team from './Team';
import Friends from './Friends';

function App() {
  function handleClick(){

    alert ('button clicked');
  }
  const handleClick2 = () =>{
    alert('button 2 clicked')
  }

  return (
    <>
      
      <h3> React Core concepts 2</h3>
      <Friends></Friends>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click2 Me</button>
      <button onClick={() =>{alert('mara kha')}}>Click 3</button>

     
     
    </>
  )
}

export default App
