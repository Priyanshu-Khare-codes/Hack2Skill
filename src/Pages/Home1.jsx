import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Home1 = () => {
    const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Retrieve user details from localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user'); // Remove user data
    setUser(null); // Update state
    navigate('/'); // Redirect to Home
  };
  return (
    <div className='bg-image bg-cover h-screen'>
     <div className='flex text-center justify-around p-3 pr-[3px]'>
     <div className='text-yellow-50 font-serif font-bold text-3xl '>
        <h1   className='p-3 hover:shadow-md hover:shadow-gray-300 hover:rounded-lg'>Gen Ai</h1>
      </div>
      <nav>
        <ul className='flex text-white gap-5 bg-zinc-950 p-3 rounded-md text-center hover:shadow-sm hover:shadow-zinc-300'>
            <li  className='font-serif font-medium border-b-2 shadow-md shadow-gray-300 p-2 rounded hover:scale-105'>
            <Link to="/">Home</Link>
            </li>
            <li   className='font-serif font-medium border-b-2 shadow-md shadow-green-50 p-2 rounded hover:scale-105'>
            <Link to="/about">About</Link></li>
            <li className='font-serif font-medium border-b-2 shadow-md shadow-gray-200 p-2 rounded hover:scale-105'>
            <Link to="/contactus">Contact Us</Link></li>
            <li className='font-serif font-medium border-b-2 shadow-md shadow-green-200 p-2 rounded hover:scale-105'>Developer info</li>
        </ul>
      </nav>
      <div className='pl-6 mt-0  '>
      {user ? (
            <button
              onClick={handleLogout}
              className='text-black p-5 m-1 bg-red-500 rounded-md border-b-4 shadow-lg shadow-red-400 hover:scale-105'
            >
              Logout
            </button>
          ) : (
            <>
              <button className='text-black p-[10px] m-1 bg-red-200   rounded-md border-b-4 shadow-lg shadow-red-400 hover:scale-105'>
                <Link to="/login">Log in</Link>
              </button>
              <button  className='text-black  m-1 p-[10px] bg-red-200 rounded-md border-b-4 shadow-lg shadow-red-400 hover:scale-105' >
                <Link to="/signup">Sign up</Link>
              </button>
            </>
          )} 
      </div>
     </div>
     <div className='flex place-content-center text-white mt-[190px] '>
        <h1 className='text-5xl font-serif font-semibold border-b-4 border-b-orange-300 shadow-lg p-3 rounded-lg shadow-stone-200 hover:shadow-yellow-200 hover:text-rose-100 hover:cursor-pointer ' >Welcome to Crazy dev</h1>
         </div>
     <div className='text-white flex place-content-center mt-14'>
        <h2 className='text-3xl font-serif font-bold '>AI-Driven tools for detecting and Preventing online harm</h2>
     </div>
     <div className='flex place-content-center'>
        <button  className='text-white text-xl border-b-4 border-b-red-300 rounded-lg  font-serif p-3 mt-10 hover:scale-110 hover:shadow-md hover:shadow-orange-300'>
        <Link to="/data">Get Started</Link>
            </button>
     </div>
    </div>
  );
}

export default Home1;
