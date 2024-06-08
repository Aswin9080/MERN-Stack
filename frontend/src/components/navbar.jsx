import React, { useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import AuthForm from "./Auth";
function Navbar() {
    const navigate = useNavigate();
    const [showSignOut, setShowSignOut] = useState(false);

    function goCard() {
        navigate('/Cards');
    }

    function handleSignOut() {
        // Add your sign out logic here
        console.log("User signed out");
        // For example, navigate to a sign-out route or perform sign-out operations
        navigate('/signout');
    }

    return (
        <div className="nav sticky top-0">
            <div className="bg-gray-300 text-center">
                <h1 className="lg:p-5">ZigZag introduces surprises with every twist.</h1>
            </div>

            <nav className="flex justify-between p-4 bg-white overflow-x-auto no-scrollbar gap-5">
                <div className="nav--h1 flex justify-center items-center ibm-plex-serif-semibold">
                    <h1>ZigZag</h1>
                </div>

                <div className="navbar--Search p-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                    <input type="text" placeholder="search any content..." className="ml-2" />
                </div>

                <div className="flex justify-center items-center gap-5">
                    <div className="flex justify-center items-center font-medium">
                        <Link to='/Frontpage'>Home</Link>
                    </div>
                    <div className="font-medium">
                        <h1 onClick={goCard} className="cursor-pointer">Card</h1>
                    </div>
                    <div className="relative flex flex-col justify-center items-center"
                        onMouseEnter={() => setShowSignOut(true)}
                        onMouseLeave={() => setShowSignOut(false)}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 hover:text-red-500">
                            <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        {showSignOut && (
                            <div 
                                className="absolute mt-16  cursor-pointer" 
                                onClick={handleSignOut}
                            >  <Link to={'/SignOut'} element={<AuthForm></AuthForm>}>Sign Out</Link>
                                
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
