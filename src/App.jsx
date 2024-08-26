import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './signup'
import { BrowserRouter, Router, Route} from "react-router-dom";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <BrowserRouter>
    <Router>
      <Route path='/register' element={<Signup />} ></Route>
      <Route path='/register' element={<Login />} ></Route>

    </Router>
    </BrowserRouter>
   </div>
  )
}

export default App
