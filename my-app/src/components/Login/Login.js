import React, { useState } from 'react';
import './Login.css';

function Login(){
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState(''); 
    const [error, setError] = useState(''); 

    if (!email || !password) {
        setError('Fill in Email and Password');
        return;
    }

    if (!email.include('@')){
        setError('Fill in Email correctly');
        return; 
    }

    setError('');
    alert('Logging in as ${email}'); 

    


    return (
        <div className = "login-page">
            <div class = "login-box"> 
                <form onSubmit={handleLogin} className="login-form">
                    <h2>LOG IN</h2>
                    {error && <div className="error-message">{error}</div>}

                    <input 
                        input="email" 
                        placeholder="Enter Email"
                        class="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input 
                        input="password"
                        placeholder="Enter Password"
                        class="form-control"
                        value={password}
                        onChange={(p) => setPassword(p.target.value)}
                    />

                    <button type="Submit">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;