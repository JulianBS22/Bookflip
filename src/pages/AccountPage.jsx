import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage() {
    const {ready, user} =useContext(UserContext);
    const {subpage} = useParams();
    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user) {
        return <Navigate to ={'/login'} />
    }
    
    function linkClasses (type = null) {
        let classes = 'py-2 px-6';
        if (type === subpage || (subpage === undefined && type === 'profile')|| type === 'search'){
            classes += 'bg-primary text-white rounded-full';
        
        }
        return classes;
        
    }

    return (
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2" >
                <Link className = {linkClasses('profile')} to={'/account'}> My account</Link>
                <Link className = {linkClasses('mybooks')} to={'/account/mybooks'}> My Books</Link>
                <Link className = {linkClasses('search')} to={'/search'}> Search a book</Link>
            </nav>
            
        </div>
    );
}