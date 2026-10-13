import { useState } from "react"
import Login from "./Login"


const App = () => {
  const[isLoggedIn,setLoggedIn] = useState(false)
  return (
    <div>
      {!isLoggedIn && <Login isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />}
      {isLoggedIn && <p>You are Logged In!</p>}
    </div>
  )
}

export default App
