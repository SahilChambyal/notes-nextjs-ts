// src/components/LoginPage.js
'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import './LoginPage.css';

// function LoginPage({ setLoading }:{setLoading: (value: boolean) => void}) {
const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const navigate = useRouter();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
      const response = await axios.post(`https://notes-backend-express.onrender.com${endpoint}`, { username, password });
      // const response = await axios.post(`http://localhost:5000${endpoint}`, { username, password });
      if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('username', response.data.username);
        navigate.push('/');
      } else {
        alert(response.data.message);
        // console.log()
      }
    } catch (error:any) {
      alert(error.response?.data?.message || 'An error occurred');
      console.log(error)
    } finally {
      // setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-[100vh] bg-[#fafafa]">
      <div className="bg-white p-[40px] rounded-[10px] shadow-sm text-center w-[100%] max-w-[400px]">
        <h1 className='mb-[30px] text-[#333] text-2xl'>{isLogin ? 'Login' : 'Register'}</h1>
        <form onSubmit={handleSubmit}>
          {/* <div className={`input-group ${isFocused || username ? 'focused' : ''}`}> */}
          <div className='relative mb-[30px]'
              // style={`${isFocused || username ? }`}
              >
            <input
            className='w-full p-2.5 border-0 border-b-2 border-gray-300 text-base outline-none transition-colors duration-300'
              aria-label = "input"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
            />
            <label className='absolute top-2.5 left-0 text-base text-gray-400 transition-all duration-300 ease-pointer-events-none'
            style={{
              top: (isFocused || username) ? '-10px' : undefined,
              fontSize: (isFocused || username) ? '0.75rem' : undefined,
              color: (isFocused || username) ? '#667eea' : undefined,
            }}
            >Username</label>
          </div>
          {/* <div className={`input-group ${isFocused || password ? 'focused' : ''}`}> */}
          <div className='relative mb-[30px]'
              style={{
                top: (isFocused || username) ? '-10px' : undefined,
                fontSize: (isFocused || username) ? '0.75rem' : undefined,
                color: (isFocused || username) ? '#667eea' : undefined,
              }}
              >
            <input
            className='w-full p-2.5 border-0 border-b-2 border-gray-300 text-base outline-none transition-colors duration-300'
                aria-label = "input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              required
            />
            <label className='absolute top-2.5 left-0 text-base text-gray-400 transition-all duration-300 ease-pointer-events-none'
            style={{
              top: (isFocused || username) ? '-10px' : undefined,
              fontSize: (isFocused || username) ? '0.75rem' : undefined,
              color: (isFocused || username) ? '#667eea' : undefined,
            }}
            >
              Password
              </label>
          </div>
          <button type="submit" className="w-[100%] p-[12px] bg-[#667eea] text-white border-none rounded-md text-sm cursor-pointer transition-all  hover:bg-[#5a67d8]">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>
        <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: 'pointer', marginTop: '10px' }}>
          {isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
        </p>
      </div>
    </div>
  );
}

export default LoginPage;