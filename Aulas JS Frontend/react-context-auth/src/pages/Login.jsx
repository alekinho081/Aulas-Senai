import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const navigate = useNavigate();
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const success = await login(username, password);
        if(success) {
            navigate('/')
        }else {
            alert('Usuário ou senha inválida');
        }
        
        
    };


    return (
        <form onSubmit={handleSubmit}>
                <h2>Login</h2>
                <input 
                    type="text" 
                    placeholder="Usuário"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    
                    />
                <br/>
                <input
                    type="password"
                    placeholder="Senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                
                />
                <br/>
                <button type="submit">Entrar</button>


        </form>
    )
}


export default Login;