import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Kalalou from './pages/Kalalou'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/kalalou" element={<Kalalou />} />
      </Routes>
    </Router>
  )
}

export default App

