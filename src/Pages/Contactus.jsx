import React, {useState,useEffect} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
const Contactus = () => {
    const [user, setUser] = useState(null);
          const navigate = useNavigate();
        
          useEffect(() => {
            
            const storedUser = localStorage.getItem('user');
            if (storedUser) {
              setUser(JSON.parse(storedUser));
            }
          }, []);
        
          const handleLogout = () => {
            localStorage.removeItem('user');
            setUser(null); 
            navigate('/'); 
          };
  return (
    <div className='bg-custom h-screen bg-cover'>
      <div className='flex text-center justify-around p-3 pr-[3px]'>
     <div className='text-yellow-50 font-serif font-bold text-3xl '>
        <h1 className='p-3 hover:shadow-md hover:shadow-gray-300 hover:rounded-lg'>
            <Link to="/">Gen Ai</Link></h1>
      </div>
      <nav>
        <ul className='flex text-white gap-5 bg-zinc-950 p-3 rounded-md text-center hover:shadow-sm hover:shadow-zinc-300'>
            <li className='font-serif font-medium border-b-2 shadow-md shadow-gray-300 p-2 rounded hover:scale-105'>
                <Link to="/">Home</Link></li>
            <li className='font-serif font-medium border-b-2 shadow-md shadow-green-50 p-2 rounded hover:scale-105'>
                <Link to="/about">About</Link></li>
            <li className='font-serif font-medium border-b-2 shadow-md shadow-gray-200 p-2 rounded hover:scale-105'>
                <Link to="/contactus">contact us</Link></li>
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
                         <button className='text-black p-5 m-1 bg-red-200 rounded-md border-b-4 shadow-lg shadow-red-400 hover:scale-105'>
                           <Link to="/login">Log in</Link>
                         </button>
                         <button className='text-black p-5 m-1 bg-red-200 rounded-md border-b-4 shadow-lg shadow-red-400 hover:scale-105'>
                           <Link to="/signup">Sign up</Link>
                         </button>
                       </>
                     )}     
      </div>
     </div>
    <div className='flex place-content-center text-white mt-36 '>
       <div className='border-b-4 border-b-orange-300 shadow-md shadow-slate-100 p-4 rounded-lg hover:shadow-orange-200 font-mono text-xl hover:scale-105'>
         Contact us
           </div> 
            </div>
            <div className='flex-row place-content-center mt-9 pl-[450px]'>
            <div className='bg-amber-100 rounded-lg text-black w-[50%] h-auto m-7 text-center border-b-8 border-b-lime-200 hover:shadow-lg hover:shadow-neutral-50'>
            <h1 className='text-2xl font-mono font-bold underline '> Email id</h1>
            <p className='font-serif font-semibold text-lg mt-1'>avichalshrivastav2006@gmail.com</p>

        </div>
        <div className='bg-amber-100 text-black rounded-lg w-[50%] h-auto m-7 text-center  border-b-8 border-b-lime-200 hover:shadow-lg hover:shadow-neutral-50'>
            <h1 className='text-2xl font-mono font-bold underline'>Contact no.</h1>
            <p className='font-mono font-semibold text-xl mt-1' >9110018904</p>
        </div>
            </div>
    </div>
  );
}

export default Contactus;
