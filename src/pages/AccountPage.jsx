import { useContext, useState } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";
import axios from "axios";
import Mybooks from "./Bookpages";

export default function AccountPage() {
    const [redirect, setRedirect] = useState(null);
    const {ready, user, setUser} =useContext(UserContext);
    let {subpage} = useParams();
    if (subpage === undefined) {
        subpage = 'profile';
    }

    async function logout() {
        await axios.post('/logout');
        setUser(null)
        setRedirect('/');
    }

    if (!ready) {
        return 'Loading...';
    }

    if (ready && !user && !redirect) {
        return <Navigate to ={'/login'} />

    }
   
    
    //afinar las clases aqui el hover especial no funciona
    function linkClasses (type=null ) {
        let classes = 'inline-flex gap-2 py-2 px-6  text-white rounded-full ';
        if ( type === subpage ) {
            classes += ' bg-primary';
            
        
        }else { classes += ' bg-gray-200';

            }
        return classes;
        
    }

    if (redirect) 
        return <Navigate to={redirect} />

    return ( 
        <div>
            <nav className= " w-full flex justify-center mt-8 gap-2 mb-8" >
               
                <Link className = {linkClasses( 'profile' )} to={'/account'}> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg> My account</Link>

                <Link className =  {linkClasses(' mybooks ')} to={'/account/mybooks'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg> My Books</Link>

                <Link className = {linkClasses(' search ')} to={'/search'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
 Search a book</Link>

            </nav>
            {subpage === 'profile' && (
                <div className="text-center max-w-lg mx-auto">
                    Logged in as {user.username} ({user.email})<br />
                    <button onClick={logout} className= "primary max-w-sm mt-2">
                    Logout
                    </button>
                </div>
                )}
                {subpage === 'mybooks' && (
                    <Mybooks />
                )};
            
        </div>
    );
}