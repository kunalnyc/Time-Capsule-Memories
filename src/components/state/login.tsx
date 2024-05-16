import { useState } from "react"

export const LoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const handleLogin = () => {
        setIsLoggedIn(true)
    }
    const handleSignout = () => {
        setIsLoggedIn(false)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleSignout}>Sign out</button>
            <div>User is {isLoggedIn ? 'Logged in' : 'Log out'} / Logged Out</div>
        </div>
    )
}