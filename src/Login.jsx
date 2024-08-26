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



    <div className="h-screen flex justify-center items-center">
      <ul className="hidden dark text-sm font-medium text-center text-gray-500 rounded-lg shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
        <li className="w-96 focus-within:z-10">
          <a href="" className="inline-block w-full p-4 text-gray-900 bg-gray-100 border-r border-gray-200 dark:border-gray-700 rounded-s-lg rounded-e-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-700 dark:text-white" aria-current="page">Login</a>
          <div className="h-64 flex justify-center items-center">
            <form className="text-center px-3 py-10 ml-[.5rem]" onSubmit={handleSubmit} //Attach form submission handler
            >
              <div className="inputbox">
                <label>Username : </label>
                <input
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
                  type="password"
                  name="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} // Update state on input change
                />
                <p className="msg"></p>
              </div>

              <input type="submit" value="Log in" className="submit" />

              <p className="sign">
                Don't have an account?  <a href="/register">Register</a>.
              </p>
            </form>
          </div>
        </li>
      </ul>
    </div>



  );
};

export default Login;
