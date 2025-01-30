import React, { useState, useEffect } from 'react';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import axios from 'axios';
import Cookies from 'js-cookie';
import UserInfo from '../components/UserInfo';

const LMS = () => {
  const [isTokenPresent, setIsTokenPresent] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    password: '',
    age: '',
    phoneNumber: '',
    grade: '',
  });

  // Fetch user information using the JWT token
  const fetchUserInfo = async () => {
    const token = Cookies.get('jwt');
    if (token) {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserInfo(response.data); // Set user information
        setIsTokenPresent(true);
      } catch (error) {
        console.error('Error fetching user info:', error);
        setIsTokenPresent(false);
      }
    } else {
      setIsTokenPresent(false);
    }
  };

  useEffect(() => {
    const token = Cookies.get('jwt');
    if (token) {
      fetchUserInfo();
    } else {
      setIsModalOpen(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const apiUrl = isLogin
      ? `${import.meta.env.VITE_API_URL}/api/login`
      : `${import.meta.env.VITE_API_URL}/api/signup`;

    try {
      const response = await axios.post(apiUrl, formData);

      if (response.status === 200) {
        Cookies.set('jwt', response.data.token, { expires: 7 });
        setIsModalOpen(false);
        setFormData({
          name: '',
          address: '',
          email: '',
          password: '',
          age: '',
          phoneNumber: '',
          grade: '',
        });

        await fetchUserInfo(); // Fetch user info after login/signup
      }
    } catch (error) {
      console.error('Authentication failed:', error.response?.data?.message || error.message);
      alert(error.response?.data?.message || 'Something went wrong! Please try again.');
    }
  };

  return (
    <div>
      <div className={`${isTokenPresent ? '' : 'filter blur-sm pointer-events-none'} p-4`}>
        <Heading />
        <div className="flex flex-col items-center">
          <UserInfo userInfo={userInfo} />
        </div>
        <Footer />
      </div>

      {/* Modal for login/signup */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-[40vw] text-center">
            <h2 className="text-xl font-semibold mb-4">{isLogin ? 'Login' : 'Sign Up'}</h2>
            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                  />
                  <input
                    type="number"
                    name="age"
                    placeholder="Age"
                    value={formData.age}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                  />
                  <input
                    type="text"
                    name="grade"
                    placeholder="Grade"
                    value={formData.grade}
                    onChange={handleInputChange}
                    className="w-full p-2 mb-3 border border-gray-300 rounded"
                  />
                </>
              )}
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 mb-3 border border-gray-300 rounded"
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full p-2 mb-4 border border-gray-300 rounded"
              />
              <button
                type="submit"
                className="w-full py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
              >
                {isLogin ? 'Login' : 'Sign Up'}
              </button>
            </form>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="mt-4 text-blue-600 underline"
            >
              {isLogin ? 'Create an account' : 'Already have an account? Login'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LMS;
