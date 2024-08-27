import React, { useState } from 'react';

const Login = () => {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare form data
    const formData = { username, password };

    try {
      // Make POST request to the server
      const response = await fetch('http://localhost:8080/studentLog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (response.ok) {
        // Handle successful response
        console.log('Login successful');
        // Reset form inputs
        setUsername('');
        setPassword('');
      } else {
        // Handle error response
        console.error('Error logging in:', response.statusText);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <>
      <div className="h-screen flex justify-center items-center">
        <ul className="hidden dark text-sm rounded-lg font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <div className="h-84 w-96 flex  justify-center rounded-lg ">
            <ul className="nav nav-tabs flex flex-row space-x-4 my-5">
              <li className="nav-item">
                <a href="" className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg rounded-e-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Login</a>
                <form className="text-center px-3 py-10 my-5 ml-[.5rem]" onSubmit={handleSubmit} //Attach form submission handler
                >
                  <div className="inputbox">
                    <label>Username : </label>
                    <input
                      className='rounded-lg'
                      type="text"
                      name="username"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} // Update state on input change
                    />
                    <p className="msg"></p>
                  </div>

                  <div className="inputbox my-5">
                    <label>Password : </label>
                    <input
                      className='rounded-lg'
                      type="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state on input change
                    />
                    <p className="msg"></p>
                  </div>
                  <div className="border border-2 border-gray-500 rounded-lg mx-auto w-40 h-10 flex justify-center items-center">
                    <input type="submit" value="Log in" className="submit" />
                  </div>

                  <p className="sign my-2">
                    Don't have an account?  <a href="/register"><u>Register</u></a>.
                  </p>
                </form>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
  )
};

export default Login;
