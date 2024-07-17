import { useState } from 'react';

import useAuth from '../../hooks/useAuth';

import Swal from 'sweetalert2';
import useAxiosCommon from '../../hooks/useAxiosCommon';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [pin, setPin] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const {createUser, user, updateUserProfile} = useAuth();
  const axiosCommon = useAxiosCommon()
  
  const firebasePin = pin + 9
 
  const registerUser = async user => {
    console.log(user)
    const { data } = await axiosCommon.put(
      `/register`,
      user
    )
    console.log(data)
    return data
  }
  console.log(name)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to backend)
    const pinRegex = /^\d{5}$/;

    if (!pinRegex.test(pin)) {
      console.log("PIN must be exactly 5 numeric digits.");
      return;
    }
    const currentUser = {
      email: email,
      role: 'User',
      status: 'pending',
      mobile:mobile,
      pin:pin,
      name:name,
    }

   
    createUser(email, firebasePin)
    .then(res=>{
      registerUser(currentUser)
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Registration Successfull",
        showConfirmButton: false,
        timer: 1500
      });
      updateUserProfile(name)
    })
    
    
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white bg-opacity-70 shadow-md rounded-md">
      <h2 className="text-xl font-semibold mb-4 text-[#02681F]">User Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 text-gray-700 bg-[#E8F0FE] block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#DCFFEB]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
        <label htmlFor="pin" className="block text-sm font-medium text-gray-700">
            {
              pin.length == 5? "Continue": "You mast enter 5 character number pin"
            }
          </label>
          <input
            type="number"
            id="pin"
            className="mt-1 text-gray-700 bg-[#E8F0FE] block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#DCFFEB]"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            required
          />
          
        </div>
        <div className="mb-4">
          <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            className="mt-1 bg-[#E8F0FE] text-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#DCFFEB]"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 text-gray-700 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <button
          type="submit"
          className="w-full text-gray-700 bg-[#DCFFEB] font-semibold text-[#02681F] px-5 py-3 rounded-lg shadow-lg hover:bg-[#02681F] hover:text-[#DCFFEB] duration-300 focus:outline-none"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
