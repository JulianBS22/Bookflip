import { Link } from "react-router-dom";

export default function LoginPage() {
    return (
        <div className="mt-4 grow flex items-center justify-around">
            <div className="mb-64">
                <h1 className="text-4xl text-center">Login</h1>
                <form className="max-w-md mx-auto mt-6">
                    <input type="email" placeholder="your@email.com" />
                    <input type="password" placeholder="password" />
                    <button className="primary">Login</button>
                    <div className="text-center py-2 text-gray-500">
                        ¿Aún no tienes una cuenta?
                        <Link className="underline text-black" to ={'/register'}>Regístrate aquí</Link>
                    </div>
                </form>
            </div>
            
        </div>
    )
}