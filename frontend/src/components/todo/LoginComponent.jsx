import { useState } from "react"
import {useNavigate} from 'react-router-dom'
import { useAuth } from "./security/AuthContext"

function LoginComponent() {

    const [username, setUsername] = useState("in28minutes")

    const [password, setPassword] = useState('')

    const [showErrorMessage, setShowErrorMesssage] = useState(false)

    const navigate = useNavigate()

    const authContext = useAuth()

    function handleUsernameChange(event) {
        setUsername(event.target.value)
    }

    function handlePasswordChange(event) {
        setPassword(event.target.value)
    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        } else {
            setShowErrorMesssage(true)
        }
    }

    return (
        <div className="login">
            <h1>Time to login!</h1>
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your credentials.</div>}
            <div className="loginForm">
                <div>
                    <label>User Name:</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )
}

export default LoginComponent