import { useState } from "react"


export function RegisterForm(){
    const [username, setUername] = useState()
    const [password, setPassword] = useState()
    const [displayName, setDisplayName] = useState()

    return (
    <>
    <p>Create account.</p>
    <form>
        <div>
            <label htmlFor="username">Username: </label>
            <input type="text" id="username" value={username} onChange={(e) => {
                setUername(e.target.value)
            }}/>
        </div>
        <div>
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }}/>
        </div>
        <div>
            <label htmlFor="displayName">Display: </label>
            <input id="display-name" value={displayName} onChange={(e) => {
                setDisplayName(e.target.value)
            }}/>
        </div>
    </form>
    </>
    )
}




