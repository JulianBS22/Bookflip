import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
    const [username,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
           await axios.post('/register', {
            username,
            email,
            password
        });
        alert('Registro completado. Ahora puedes hacer Login') 
        } catch (error) {
            alert('El registro ha fallado, por favor inténtelo de nuevo más tarde')
        }
        
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Registro</h1>
                <form className="max-w-md mx-auto mt-6" onSubmit={registerUser}>
                    <input type="text" 
                        placeholder="Juan García" 
                        value={username} 
                        onChange={ev =>setName(ev.target.value)}/>
                    <input type="email" 
                        placeholder="your@email.com" 
                        value={email} 
                        onChange={ev =>setEmail(ev.target.value)}/>
                    <input type="password" 
                        placeholder="password" 
                        value={password} 
                        onChange={ev=>setPassword(ev.target.value)}/>
                    <button className="primary">Registro</button>
                    <div className="text-center py-2 text-gray-500">
                        ¿Tienes ya una cuenta?
                        <Link className="underline text-black" to ={'/login'}>Login aquí</Link>
                    </div>
                </form>
            </div>
            
        </div>
    )
}