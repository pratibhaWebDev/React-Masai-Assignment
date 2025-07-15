import { useState } from 'react'

import './App.css'
import FeedbackForm from './components/FeedbackForm';
import FeedbackSummary from './components/FeedbackSummary';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <Routes>
        <Route path="/" element={<FeedbackForm />} />
        <Route path="/summary" element={<FeedbackSummary />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
