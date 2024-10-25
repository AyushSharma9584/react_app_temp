import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react'

function App() {
  const [first, setfirst] = useState("")
  useEffect(() => {
    hitApi()
  })
  const hitApi = async () => {
    const result = await fetch('https://api.sarteinfomining.com/auth/api/test')
    const data = await result.json()
    console.log(data)
    setfirst(data.message)
  }
  return (
    <div className="App">
      <p>Wellcome everyone !</p>
      <p>{first}</p>

    </div>
  );
}

export default App;
