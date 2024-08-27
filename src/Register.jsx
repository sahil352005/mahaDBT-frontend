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
    <>
      <div className="h-screen flex justify-center items-center">
        <ul className="hidden text-sm rounded-lg font-medium text-center text-gray-500 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
          <div className="h-84 w-100 flex justify-center rounded-lg ">
            <ul className="nav nav-tabs flex flex-row space-x-4 my-5">
              <li className="nav-item">
                <a href="" className="flex justify-center items-center w-96 mx-auto inline-block p-4 text-gray-900 bg-red-400 border border-gray-200 dark:border-gray-700 rounded-s-lg rounded-e-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none dark:bg-gray-300 dark:text-white" aria-current="page">Register</a>
                <form className="text-center px-3 py-10 my-5 ml-[.5rem]" onSubmit={handleSubmit} //Attach form submission handler
                >
                  <div className='flex space-x-4'>
                    <div className="inputbox">
                      <label>Username : </label>
                      <input
                        className="rounded-lg"
                        type="text"
                        name="username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} // Update state on input change
                      />
                      <p className="msg"></p>
                    </div>

                    <div className="inputbox">
                      <label>Email-id : </label>
                      <input
                        className="rounded-lg"
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} // Update state on input change
                      />
                      <p className="msg"></p>
                    </div>
                  </div>

                  <div className="inputbox my-4">
                    <label>Password : </label>
                    <input
                      className="rounded-lg"
                      type="password"
                      name="password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} // Update state on input change
                    />
                    <p className="msg"></p>
                  </div>

                  <div className="border border-2 border-gray-500 rounded-lg mx-auto w-40 h-10 flex justify-center items-center">
                    <input type="submit" value="Sign up" className="submit" />
                  </div>

                  <p className="sign my-2">
                    Already have an account?  <a href="/login"><u>Login</u></a>.
                  </p>
                </form>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </>
    // <div className="w-screen flex justify-center">
    //   <form
    //     className="text-center px-3 py-10 ml-[.5rem]"
    //     onSubmit={handleSubmit} // Attach form submission handler
    //   >
    //     <h3 className="font-bold">Register</h3>

    //     <div className="inputbox">
    //       <label>Username</label>
    //       <input
    //         type="text"
    //         className="email"
    //         name="username"
    //         required
    //         value={username}
    //         onChange={(e) => setUsername(e.target.value)} // Update state on input change
    //       />
    //       <p className="msg"></p>
    //     </div>

    //     <div className="inputbox">
    //       <label>Email-id</label>
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)} // Update state on input change
    //       />
    //       <p className="msg"></p>
    //     </div>

    //     <div className="inputbox">
    //       <label>Password</label>
    //       <input
    //         type="password"
    //         className="password"
    //         name="password"
    //         required
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)} // Update state on input change
    //       />
    //       <p className="msg"></p>
    //     </div>

    //     <input type="submit" value="sign up" className="submit" />

    //   </form>
    // </div>
  )
};

export default Register;
