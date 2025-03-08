import { useState } from 'react'
import './App.css'

function App() {
    const [value, setValue] = useState(undefined)
    const handleChange = (e) => {
        setValue(e.target.value)
    }

    return <form>
        <input type="text" name='firstname' value={value}
            onChange={handleChange} />
        <button>Envoyer</button>
    </form>

}
export default App