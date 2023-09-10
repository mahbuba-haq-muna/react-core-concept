
import './App.css'
import Counter from './counter'
import Friends from './friends'
function App() {
      function handleClick(){
        alert('button clicked')
      }

      const handleClick2 = () =>{
        alert('button clicked again')
      }

  return (
    <>
      <h2>React core concept</h2>
      <Counter></Counter>
      <Friends></Friends>
      <button onClick = {handleClick}>Click me</button>
      <button onClick = {handleClick2}>Click again</button>
      <button onClick = {() =>{alert('third button clicked')}}>Third button</button>
      
    </>
  )
}

export default App
