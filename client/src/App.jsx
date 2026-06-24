import { useState } from 'react'
import Register from './pages/Register'
import './App.css'

function App() {
  const [students, setStudents] = useState([]);

  return (
    <div className="App">
      <h1>Student Management</h1>
      <Register />
      {/* Your component JSX here */}
    </div>
  );
}

export default App
