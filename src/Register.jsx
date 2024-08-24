import React, { useState } from 'react';

const Register = () => {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Prepare form data
    const formData = { username, email, password };

    try {
      // Make POST request to the server
      const response = await fetch('http://localhost:8080/studentReg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(formData), // Convert form data to JSON string
      });

      if (response.ok) {
        // Handle successful response
        console.log('Form submitted successfully');
        // Reset form inputs
        setUsername('');
        setEmail('');
        setPassword('');
      } else {
        // Handle error response
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="w-screen flex justify-center">
      <form
        className="text-center px-3 py-10 ml-[.5rem]"
        onSubmit={handleSubmit} // Attach form submission handler
      >
        <h3 className="font-bold">Register</h3>

        <div className="inputbox">
          <label>Username</label>
          <input
            type="text"
            className="email"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update state on input change
          />
          <p className="msg"></p>
        </div>

        <div className="inputbox">
          <label>Email-id</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on input change
          />
          <p className="msg"></p>
        </div>

        <div className="inputbox">
          <label>Password</label>
          <input
            type="password"
            className="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update state on input change
          />
          <p className="msg"></p>
        </div>

        <input type="submit" value="sign up" className="submit" />

      </form>
    </div>
  );
};

export default Register;
