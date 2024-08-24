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
    <div className="w-screen flex justify-center">
      <form
        className="text-center px-3 py-10 ml-[.5rem]"
        onSubmit={handleSubmit} // Attach form submission handler
      >
        <h3 className="font-bold">Login</h3>

        <div className="inputbox">
          <label>Username</label>
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
          <p className="msg"></p>
        </div>

        <div className="inputbox">
          <label>Password</label>
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
          Don't have an account?
          <a href="/register">Register</a>.
        </p>
      </form>
    </div>
  );
};

export default Login;
