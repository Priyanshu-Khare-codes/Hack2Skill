import React , {useEffect,useState}from 'react';
import { Link, useNavigate } from 'react-router-dom';
const About = () => {
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
    <div className="bg-[url('/About.jpeg')] h-[750px]bg-cover">
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
     <div>
        <div className='flex flex-row place-content-center'>
        <div className='flex w-[30%] h-80 pl-14 mt-12'>
        <div className='bg-slate-200 text-black border-t-8 border-t-orange-400 border-b-8 border-b-orange-400 rounded-lg hover:shadow-lg hover:shadow-orange-200 hover:border-2 hover:border-2-gray-200 hover:scale-105'>
            <h1 className='text-center mt-7 text-2xl font-serif font-bold'>Our mission</h1>
            <p className='pl-4 mt-4 font-mono text-balance text-md'> Our mission is to create safer and more inclusive online spaces by providing an advanced, user-friendly tool that detects and categorizes harmful content. We aim to empower individuals, organizations, and platforms to foster positive communication, protect mental health, and promote online safety through innovative technology and actionable insights.</p>
        </div>
        </div>
        <div className='flex w-[30%] h-80 pl-14 mt-12'>
        <div className='bg-slate-200 text-black rounded-lg border-t-8 border-t-orange-400 border-b-8 border-b-orange-400 hover:shadow-lg hover:shadow-orange-200 hover:border-2 hover:border-2-gray-200 hover:scale-105 '>
            <h1 className='text-center mt-7 text-2xl font-serif font-bold'>Our Vision</h1>
            <p className='pl-4 mt-4 font-mono text-balance text-md'>We envision a digital world where harmful and negative content is minimized, enabling healthier interactions and stronger communities. By continuously improving our tool and expanding its accessibility, we strive to be a global leader in promoting constructive and respectful online communication for all</p>
        </div>
        </div>
        </div>
        <div className='flex place-content-center w-[90%] h-36 pl-52 mt-12'>
        <div className='bg-slate-200 text-black rounded-lg justify-center border-t-8 border-t-orange-400 border-b-8 border-b-orange-400 hover:shadow-lg hover:shadow-orange-200 hover:border-2 hover:border-2-gray-200 hover:scale-105'>
         <p className='pl-12 text-center mt-7 font-mono text-balance text-md'>
         We've developed a web-based tool to combat harmful online content, promoting mental well-being, online safety, and community well-being. Our solution detects harmful words, analyzes sentiment, and categorizes negative content. With features like customizable categories, detailed reports, multilingual support, and a privacy-focused approach, our tool empowers individuals, organizations, and platforms to foster safer online environments.
         </p>
        </div>
        </div>
     </div>
    </div>
  );
}

export default About;
