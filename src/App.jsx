import { useState } from 'react'
import './App.css'

function App() {
    const [isTermAccepted, setIsTermAccepted] = useState()

    return <form>
        <CGUCheckbox checked={isTermAccepted} onCheck={setIsTermAccepted} />
        <button disabled={!isTermAccepted}>Envoyer le formulaire</button>
    </form>
}

function CGUCheckbox({ checked }) {
    return <div>
        <label>
            <input type="checkbox"
                onChange={(e) => onCheck(e.target.checked)}
                checked={checked} />
            Accepter les conditions d'utilisation
        </label>
    </div>
}
export default App