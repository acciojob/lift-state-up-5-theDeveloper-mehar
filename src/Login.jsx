
const Login = ({isLoggedIn,setLoggedIn}) => {
  return (
    <div>
      <label>Username:
        <input type="text"/>
      </label>
      <br />
      <label>Password:
        <input type="password"/>
      </label>
      <br />
      <button onClick={()=>setLoggedIn(!isLoggedIn)}>
        Login
      </button>
    </div>
  )
}

export default Login
