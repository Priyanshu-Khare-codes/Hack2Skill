import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
 const navigate = useNavigate();
 const [email,setEmail]= useState('');
 const [password,setPassword]= useState('');
 const [error,setError]= useState('');

 const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

 const handleLogin =() =>{
    if(email.trim()=== '' || password.trim() === ''  ){
        setError(alert('Please enter email and password both '))
        return;
    }
    if (!validateEmail(email)) {
        setError(alert('Please enter a valid email format.'));
        return;
      }

    const Userdata ={email,password};
    localStorage.setItem('user',JSON.stringify(Userdata));
    
    navigate('/');
 };


  return (
    <div className="bg-[url('/About.jpeg')] bg-cover h-screen">
      <div className='flex  place-content-center  '>
        <div className='bg-[#2d1f1fae] text-black w-[30%] h-[60vh] mt-28 p-5 rounded-lg shadow-inner shadow-slate-500 hover:shadow-lg hover:border-b-4 hover:border-b-slate-200 hover:shadow-slate-200 hover:cursor-pointer '>
                  <div className='flex justify-center'>
                  <h1 className='text-3xl font-serif font-bold text-center text-white'>Log in</h1>
                  <img className='w-[30px]'  src="https://s3-alpha-sig.figma.com/img/4167/8349/0e47ae6941e910eacbf0492c2959a713?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=p5RnQyobPDDlpySzSBij62S0jt4NjNzJBWNSL7TwEzqfKM9a1Ca-qUME84s7wmSv-j2P0eGblyRPnYFc0hh~dFqAnkroV98K92Gy~uzrbIP9YZAe5oXxsbxLbPBPwnYYmSxg4OBMlVd9KE3JGtLeKgA5ijs8GmLQFzovJLGXFW-W0FBkFUfzdTdemIaCLHUTBrcXLzCMQxpm9kuOfVyLDCvhX6CM5J-lFlGd4ppEYCBRM85qyV06ASjGeTaCsMlFz8Dl~FfKKCIvGYz6S9qu~uWmmStrz6fM3H5UmEbMFqCJC-zTr~jkyXjA82amGFqoY27a47pr18wKDTVGNBKg7Q__" alt="" />
                  </div>
                  <div className="text-center underline text-white relative mt-11">
  <input
    className="w-[80%] border-b-2 border-b-white bg-[#2d1f1fae] mt-5 pr-10 text-white placeholder-gray-300"
    type="email"
    placeholder="Enter your email ID"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
  />
  <img
    src="https://s3-alpha-sig.figma.com/img/b894/6a8e/d243fd4549ee3ff2879e0a52d6c34077?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I-4FSY-JeHJcoyUDNLj1xLAIO8pjX69pj3YbY-e2ioRKB9aSpqijEzhpAYwiFivM-T7ovqnZ5IAIwdRnDumwWoeUaYxMX6q3-8WApZR~6vPA~OW2bNXnss58LvsifzFzVBB4dKg3z5COiGWuB8gP62TXmCfjH1QY-JXgxnjJfczCP7yCqKGz8ihFlJXpd2thlEvaUdsDuz4t6o632uSsfeZ-V1vcRRERpXx6k8bAnqvJZtJieb-YI4n7tv-yDoB4p9tNkP~zkD49tA7vcV34wsHRWXhPw6gh88Bi94mNFFy0fymRtxXn8nu6d48ieOBUXaDt9mr0TzQOXoLZRT2NuA__"
    alt="Email Icon"
    className="absolute right-[12%] top-6 w-6 h-6"
  />
</div>
<div className="text-center underline text-white relative mt-8">
  <input
    className="w-[80%] border-b-2 border-b-white bg-[#2d1f1fae] mt-5 pr-10 text-white placeholder-gray-300"
    type="password"
    placeholder="Enter your Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <img
    src="https://s3-alpha-sig.figma.com/img/dbe7/403f/ad52c1354858604aaeb28a4cf04a8277?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QK2rwUnLuXRyEM5Uh2YIHpPPpcbIygbbor6h9JqHgLxH6PRvAWkhqYNXtlQSyPo1u3xdHGp8jte6Orv-hLSuTz-CxOW9dyBeMLi~uThLXaAMSVfNU4D7DprGicY6Nzx5V5sKg7tNc1Eiyb5lSys8VlbNqqLBV1hMtpBo5UEI668YPxk0L9C37b8QRdX6ODqb2GljmCKPfqki1oIWzKMxWTw1BZfI2277QCcx-LP0MVEJB5AN67MDltQVHduJqBsh1IT9gRIpqzuX2nRctmUG7Ue2~K~tY9M7rFRE0FfuLO37yqhWHqIxFWxWqeNYUF6a-N~-zhhf-at8EXn5lSgdxg__"
    alt="Email Icon"
    className="absolute right-[12%] top-5 w-6 h-6"
  />
   {error && <p className="text-red-400 mt-2">{error}</p>}
   <div className='justify-end flex mt-5 hover:scale-105 '>
   <h2 onClick={() => navigate('/signup')} className='mt-5 p-2 w-[40%] hover:shadow-sm hover:shadow-slate-200 hover:cursor-pointer shadow-slate-200 shadow-inner'>
   Forgot Password</h2>
   </div>
   <div className='justify-end flex mt-3 '>
   <p onClick={() => navigate('/signup')} className='border-b-0 hover:scale-105 hover:cursor-pointer border-b-white text-white text-lg font-semibold'>
   New Registration</p>
   </div>
   <div>
    <button onClick={handleLogin} className='mt-8 hover:scale-105 hover:shadow-md hover:shadow-gray-200 border-b-4 border-b-slate-300 shadow-inner shadow-gray-50 p-3 text-lg rounded-lg font-mono font-semibold '>
   Submit</button>
   </div>
</div>

        </div>
      </div>
    </div>
  );
}

export default Login;
