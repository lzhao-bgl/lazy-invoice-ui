import React, { useState } from 'react'
import './App.css'
import { Amplify, Auth } from 'aws-amplify'

const App = () => {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [error, setError] = useState<string>('')

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      // AWS Cognito login
      const user = await Auth.signIn(username, password);
      console.log('User logged in:', user);
      setError(''); // Clear error if login succeeds
      // Redirect or handle login success here
    } catch (error: any) {
      console.error('Login failed:', error);
      setError(error.message || 'An error occurred')
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleLogin}>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <button type="submit" className="loginBtn">Login</button>
      </form>
    </div>
  )
}

export default App
