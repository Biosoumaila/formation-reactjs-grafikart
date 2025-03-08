import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

export function Counter() {
    const [count, setCount] = useState(0)
    const increment = () => setCount(count + 1)

    return <div>
        <p>Compteur : {count}</p>
        <button onClick={increment}>Incrementer</button>
    </div>
}
