import './App.css';
import {useState} from 'react';

function App() {
    const [name, setName] = useState('Sofia');
    const [newName, setNewName] = useState('');
    
    const changeName = (e) => {
        e.preventDefault();
        if(newName.trim() !== "") {
            setName(newName);
            setNewName('');
        } else alert("Please enter a name!"); 
    }

    return (
        <div>
            <h2>Teacher Name: {name}</h2>
            <form onSubmit={changeName}>
                <label>Nuevo Teacher: </label>
                <input type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder='add a name'/>
                <button type="submit">Add</button>
            </form>
            <ul>
                <li onClick={() => setName("Data")}>Data</li>
                <li onClick={() => setName("Yol")}>Yol</li>
                <li onClick={() => setName("Reyes")}>Reyes</li>
            </ul>

        </div>
    )
}

export default App
