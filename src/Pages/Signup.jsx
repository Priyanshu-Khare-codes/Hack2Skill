import React ,{ useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
const Signup = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
  
    const handleSignup = () => {
      setError('');
  
     
      if (!email.includes('@')) {
        setError('Invalid email format. Please include @ in the email.');
        return;
      }
  
      
      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
      }
  
      
      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }
  
     
      const userData = { email, password };
      localStorage.setItem('user', JSON.stringify(userData));
  
      
      navigate('/');
    };
  return (
    <div className='bg-hero bg-cover min-h-screen'>
      <div className='flex place-content-center'>
        <div  className='bg-[#2d1f1fae] text-white w-[30%] h-[70vh] mt-28 rounded-lg text-center  shadow-inner shadow-slate-500 hover:shadow-lg hover:border-b-4 hover:border-b-slate-200 hover:shadow-slate-200 hover:cursor-pointer'>
           <div className='flex justify-center gap-3'>
           <h1 className='text-2xl font-serif mt-3  '>Sign Up</h1>
           <img className='w-[30px] h-[30px] mt-3'   src="https://s3-alpha-sig.figma.com/img/9e54/5353/6725d5ac4b4b758972bf6427c3693924?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ICb~gr5ukZODZ8JnVxDAnSQvmuDcbm5sgYwbAUzHePNVfY3F6zi8HyLedj8UuTv2buMn8zX8NuDlRCsm4X4aUVw3KnsCHq8~XcjEt5nGGx3jgb3WcIuJdzqYgzKRgsLesA7I0UWIevdc0wqWdD5t2DQMAfnq24BKPnye0zpOIQPS5PMnfNGtyJrf3aNipjoue-aty-Rc6D-i3LgOgqyo5lvWSemAvdfOnnU1xv1ao7uRECcZZJ63ypqMN~KZ9YI7jqX4cKzQuROBcj5bFWjH57J5shcPEZBhFykh9DEZ7wAXWQ9z7A0-2xCcSvKvMtyylOQiWkYL4JVrOgLnc-3wpg__" alt="" srcset="" />
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
       <div className='text-center underline text-white relative mt-8'>
       <input
    className="w-[80%] border-b-2 border-b-white bg-[#2d1f1fae] mt-5 pr-10 text-white placeholder-gray-300"
    type="password"
    placeholder="Set Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
  <img
    src="https://s3-alpha-sig.figma.com/img/dbe7/403f/ad52c1354858604aaeb28a4cf04a8277?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=QK2rwUnLuXRyEM5Uh2YIHpPPpcbIygbbor6h9JqHgLxH6PRvAWkhqYNXtlQSyPo1u3xdHGp8jte6Orv-hLSuTz-CxOW9dyBeMLi~uThLXaAMSVfNU4D7DprGicY6Nzx5V5sKg7tNc1Eiyb5lSys8VlbNqqLBV1hMtpBo5UEI668YPxk0L9C37b8QRdX6ODqb2GljmCKPfqki1oIWzKMxWTw1BZfI2277QCcx-LP0MVEJB5AN67MDltQVHduJqBsh1IT9gRIpqzuX2nRctmUG7Ue2~K~tY9M7rFRE0FfuLO37yqhWHqIxFWxWqeNYUF6a-N~-zhhf-at8EXn5lSgdxg__"
    alt="Email Icon"
    className="absolute right-[12%] top-5 w-6 h-6"
  />
         </div>
         {error && <p className="text-red-400 mt-4">{error}</p>}
       <div className='text-center underline text-white relative mt-8'>
       <input
    className="w-[80%] border-b-2 border-b-white bg-[#2d1f1fae] mt-5 pr-10 text-white placeholder-gray-300"
    type="password"
    placeholder="Confirm Password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
       <div>
    <button onClick={handleSignup} className='mt-8 hover:scale-105 hover:shadow-md hover:shadow-gray-200 border-b-4 border-b-slate-300 shadow-inner shadow-gray-50 p-3 text-lg rounded-lg font-mono font-semibold '>
        Sign Up</button>
   </div>
   <div className='mb-0'>
   <p>already have an account <br/>
     <a href="#">
     <Link to="/login">Login</Link></a></p>
   </div>
       </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
