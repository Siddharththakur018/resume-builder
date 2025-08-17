import { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import BackgroundImage from "@/assets/background.png"
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOff } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from 'react-router-dom';

function Register() {
  const { signup } = useAuth()
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError('')
    try {
      await signup(email, password)
    } catch {
      setError('Registration failed. Please check your details.')
    }
  }

  return (
    <div className='relative'>
      <img src={BackgroundImage} alt="bg-image" className='w-full h-screen object-cover' />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className='rounded-4xl h-[90vh] w-[1200px] mx-auto bg-white absolute top-10 flex'>
          <div className='relative w-1/2'>
            <img src={BackgroundImage} alt="bg-image" className='w-full h-full p-4 rounded-4xl object-cover' />
            <div className='absolute inset-0 flex flex-col justify-between p-6'>
              <p className='text-white font-bold text-xl'>JOIN OUR COMMUNITY</p> 
              <hr className="absolute w-96 left-46 top-10 border-t-2 border-white" />
              <div>
                <p className='text-white font-bold text-6xl'>Start Your</p>
                <p className='text-white font-bold text-6xl'>Journey With Us</p>
                <p className='text-white text-lg'>Sign up today and unlock all the tools you need to grow your business.</p>
              </div>
            </div>
          </div>
          <div className='w-1/2 flex flex-col justify-center items-center p-10'>
            <h2 className="text-2xl font-bold mb-1">Create Your Account</h2>
            <h3 className="text-sm mb-6">Join us and access all features in one place</h3>
            <form onSubmit={handleRegister} className="flex flex-col gap-4 w-full max-w-sm">
              <div className='flex gap-4'>
                <div className='flex flex-col w-1/2'>
                  <label>Name</label>
                  <input
                    type="text"
                    placeholder='Full Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-0"
                  />
                </div>
                <div className='flex flex-col w-1/2'>
                  <label>Username</label>
                  <input
                    type="text"
                    placeholder='Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-0"
                  />
                </div>
              </div>
              <div className='flex flex-col'>
                <label>Email</label>
                <input
                  type="email"
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-0"
                />
              </div>
              <div className='flex flex-col'>
                <label>Password</label>
                <div className='flex border border-gray-300 rounded-lg items-center justify-between'>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder='Enter Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="p-3 w-full outline-none focus:ring-0"
                  />
                  <div className='flex cursor-pointer p-4' onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <MdOutlineRemoveRedEye /> : <IoEyeOff /> }
                  </div>
                </div>
              </div>
              {error && <p className="text-red-500">{error}</p>}
              <button type="submit" className="bg-black cursor-pointer text-white p-3 rounded-lg">Sign Up</button>
              <button type="button" className="shadow-md p-3 cursor-pointer rounded-lg flex justify-center items-center gap-2">
                <FcGoogle className='text-xl' /> Sign Up with Google
              </button>
            </form>
            <div className='absolute bottom-10 text-gray-400 text-sm' onClick={() => navigate('/login')}>
              Already have an account? <span className='text-black hover:cursor-pointer'>Sign In</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
