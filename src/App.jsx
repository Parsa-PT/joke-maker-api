import './app.css'
import axios from './axios';
import {useState} from 'react'

function App() {

  const [joke , setJoke] = useState('')
  const [answer , setAnswer] = useState('')
  let [btn , setBtn] = useState(false)


  const createJoke = ()=>{
      axios.get('/random_joke')
      .then((response)=>{
        setJoke(response.data.setup)
        setAnswer(response.data.punchline)
      })

      setBtn(btn = false)

  }

  const jokeAnswer = ()=>{
   setBtn(btn = true)
  }

  return (
    <div className="app">
      <h1>
        Prees the button and take your  joke
      </h1>
      <button onClick={createJoke}>JOKE</button>
      
      {joke ? 

      <>
      <p>{joke}</p>
      <button onClick={jokeAnswer}>Answer</button> 
      {btn ?  <p>{answer}</p> : null}
     
      </>
      
      : null}
      
    </div>
  );
}



export default App;