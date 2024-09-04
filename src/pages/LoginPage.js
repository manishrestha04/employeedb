import React from 'react'
import { useState , useContext} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';


function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const {setAuthState} = useContext(AuthContext);
    const [error, setError] = useState(null);

  
    let navigate = useNavigate()

    const login = async (event) => {
        event.preventDefault();

        const data = {username: username, password: password};

        try {
          const response = await axios.post("http://localhost:3001/auth/login", data);
          
          if (response.data.error) {
            setError(response.data.error);
          } else {
            localStorage.setItem("accessToken", response.data.token);
            setAuthState({ username: response.data.username, id: response.data.id, status: true });
            navigate("/faentry");
            window.location.reload();
          }
        } catch (error) {
          setError("Username or Password Mismatch");
        }
      };


    return (
        <div >
          <form onSubmit={login} className="loginContainer">
          {error && <p style={{ color: 'red' }}>{error}</p>}
            <label>Username:</label>
          <input 
            type="text"
            onChange={(event)=> {
                setUsername(event.target.value);
            }}
          />
          <label>Password:</label>
          <input
            type="password" 
            onChange={(event)=> {
                setPassword(event.target.value);
            }}
        />
    
          <button type="submit"> Login </button>
          </form>
        </div>
      )
}

export default Login;
