import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.png'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";
import Home from "./pages/home.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
