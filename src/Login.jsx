// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from './context/AuthContext';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       alert('Please fill in all fields');
//       return;
//     }

//     try {
//     const res = await fetch('http://localhost:5000/api/auth/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password }), // backend expects email not username
//     });

//     const data = await res.json();

//     if (res.ok) {
//       // Pass token and email to AuthContext login method
//       login(data.email, data.token);
//       navigate('/orderonline'); // redirect after login
//     } else {
//       alert(data.msg || 'Login failed');
//     }
//   } catch (error) {
//     console.error('Login error:', error);
//     alert('Server error. Please try again later.');
//   }

//     // login(email);
//     // navigate('/orderonline'); // redirect to orderonline after login
//   };

//   return (
//     <>
//     <div className="min-h-screen flex pt-[60px] justify-center bg-white">
//       <div className="w-[600px] max-w-md px-[6px] text-[sans] py-[20px] ">
//         <h1 className="text-3xl font-bold mb-[20px] text-center">Login</h1>
//         <p className="text-center text-gray-600 mb-[8px]"></p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-[10px]">Email address</label>
//             <input
//               type="email"
//               className="w-full border border-gray-300 px-[10px] py-[8px] mb-[30px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               placeholder="Email"
//               required
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-[10px]">Password</label>
//             <input
//               type="password"
//               className="w-full border border-gray-300 px-[10px] py-[8px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//               required
//             />
//           </div>

//           <div className="text-sm text-center m-[12px]">
//             {/* <a href="#" className="text-[#4b2f32] underline">Forgot your password?</a> */}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-[#4b2f32] text-[white] text-[18px] mt-[10px] mb-[10px] py-[12px] rounded-md hover:bg-gray-900"
//           >
//             Login
//           </button>
//         </form>

//         {/* <div className="mt-[6px] text-center text-sm">
//           Don't have an account? <a href="#" className="underline text-[#4b2f32]">Create account</a>
//         </div> */}
//       </div>
//     </div>
//     <div>
//       <img src="bean_border-1.png" alt="" className="w-full block" />
//     </div>
//     </>
//   );
// };

// export default Login;
  

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';


const Login = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login/signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Login form submit handler
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token',data.token);
        login(data.email, data.token);
        navigate('/orderonline');
      } else {
        alert(data.msg || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Server error. Please try again later.');
    }
  };

  // Signup form submit handler
  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !confirmPassword) {
      alert('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert('Registration successful! Please login.');
        setIsLogin(true);
        setEmail('');
        setPassword('');
        setConfirmPassword('');
      } else {
        alert(data.msg || 'Registration failed');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Server error. Please try again later.');
    }
  };

  return (
    <>
      <div className="min-h-screen flex pt-[60px] justify-center bg-white">
        <div className="">
          {/* Toggle Tabs */}
          {/* <div className="flex flex-col w-[250px] m-[80px] bg-[transparent]">
            <button
              onClick={() => setIsLogin(true)}
              className={`py-[10px] px-[8px] font-semibold text-center border-b border-gray-300 focus:outline-none ${
                isLogin ? 'text-[white] bg-[#4b2f32]' : 'text-[#4b2f32] hover:bg-[white]'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`py-[10px] px-[8px] font-semibold text-center focus:outline-none ${
                !isLogin ? 'text-[white] bg-[#4b2f32]' : 'text-[#4b2f32] hover:bg-[white]'
              }`}
            >
              Sign Up
            </button>
          </div> */}

          {/* Form Section */}
        
          <div className="w-[600px] m-[30px] bg-white p-10">
            {/* Login page*/}
            {isLogin ? (
              <>
                <h1 className="text-3xl font-bold mb-[2px] text-center">Welcome Back</h1>
                <p className="text-center text-[20px]">Login to your account</p>

                <p className='text-center pt-[10px] mb-[40px] '> Don't have account?{' '}
                  <button onClick={() => setIsLogin(false)}
                     className="underline font-medium p-[2px] border-none bg-transparent"
                   > Register</button>
                </p>

                <form onSubmit={handleLoginSubmit} className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-[12px]">Email address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 px-[8px] py-[6px] mb-[32px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-[10px]">Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 px-[8px] py-[6px] mb-[32px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4b2f32] text-[white] text-lg py-[8px] rounded-md hover:bg-gray-900 transition"
                  >
                    Login
                  </button>
                </form>
              </>
            ) : (
              // signin page
              <>
               <button onClick={() => setIsLogin(true)} 
                className='flex items-center border-none bg-transparent '>
                  {/* <ArrowLeft size={18} className="mr-1" />Back */}
                   ← 
                </button>

                <h1 className="text-3xl font-bold mb-[3px] text-center">New Here?</h1>
                <p className="text-center mb-[50px]">Create an account to save your <br /> wishlist and purchase information.</p>
                <form onSubmit={handleSignupSubmit} className="space-y-6 max-w-md mx-auto">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-[12px]">Email address</label>
                    <input
                      type="email"
                      className="w-full border border-gray-300 px-[8px] py-[6px] mb-[32px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-[12px]">Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 px-[8px] py-[6px] mb-[32px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-[12px]">Confirm Password</label>
                    <input
                      type="password"
                      className="w-full border border-gray-300 px-[8px] py-[6px] mb-[32px] rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm Password"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#4b2f32] text-[white] text-lg py-[8px] rounded-md hover:bg-gray-900 transition"
                  >
                    Sign Up
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
      {/* Decorative border image */}
      <div>
        <img src="bean_border-1.png" alt="" className="w-full block" />
      </div>
    </>
  );
};

export default Login;


