import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col, Image, Form, Button, ListGroup, } from 'react-bootstrap'
import Card from './Assets/Card';
import auth1 from './Assets/loginpage.jpg'

const Login = () => {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

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
        credentials: 'include'
      });

      if (response.ok) {
        // Handle successful response
        console.log('Login successful');
        // Reset form inputs
        setUsername('');
        setPassword('');
        navigate('/');
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
      <section className="login-content">
        <Row className="m-0 align-items-center bg-white vh-100">
          <Col md="6">
            <Row className="justify-content-center">
              <Col md="10">
                <Card className="card-transparent shadow-none d-flex justify-content-center mb-0 auth-card">
                  <Card.Body>
                    {/* <Link to="/dashboard" className="navbar-brand d-flex align-items-center mb-3"> */}
                    {/* <svg width="30" className="text-primary" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="-0.757324" y="19.2427" width="28" height="4" rx="2" transform="rotate(-45 -0.757324 19.2427)" fill="currentColor" />
                                    <rect x="7.72803" y="27.728" width="28" height="4" rx="2" transform="rotate(-45 7.72803 27.728)" fill="currentColor" />
                                    <rect x="10.5366" y="16.3945" width="16" height="4" rx="2" transform="rotate(45 10.5366 16.3945)" fill="currentColor" />
                                    <rect x="10.5562" y="-0.556152" width="28" height="4" rx="2" transform="rotate(45 10.5562 -0.556152)" fill="currentColor" />
                                 </svg> */}
                    {/* <h4 className="logo-title ms-3">Hope UI</h4>  //will be used for name */}
                    {/* </Link> */}
                    <h2 className="mb-2 text-center">Sign In</h2>
                    <p className="text-center">Login to stay connected.</p>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg="12">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="username" className="">Username</Form.Label>
                            <Form.Control type="text" className="" id="username" aria-describedby="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                          </Form.Group >
                        </Col>
                        <Col lg="12" className="">
                          <Form.Group className="form-group">
                            <Form.Label htmlFor="password" className="">Password</Form.Label>
                            <Form.Control type="password" className="" id="password" aria-describedby="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                          </Form.Group>
                        </Col>
                        <Col lg="12" className="d-flex justify-content-between">
                          {/* <Link to="/auth/recoverpw">Forgot Password?</Link> */}
                        </Col>
                      </Row>
                      <div className="d-flex justify-content-center">
                        <Button type="submit" variant="btn btn-primary">Sign In</Button>
                      </div>
                      <p className="mt-3 text-center">
                        Don’t have an account? <Link to="/register" className="text-underline">Click here to sign up.</Link>
                      </p>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            {/* <div className="sign-bg">
              <svg width="280" height="230" viewBox="0 0 431 398" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g opacity="0.05">
                  <rect x="-157.085" y="193.773" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 -157.085 193.773)" fill="#3B8AFF" />
                  <rect x="7.46875" y="358.327" width="543" height="77.5714" rx="38.7857" transform="rotate(-45 7.46875 358.327)" fill="#3B8AFF" />
                  <rect x="61.9355" y="138.545" width="310.286" height="77.5714" rx="38.7857" transform="rotate(45 61.9355 138.545)" fill="#3B8AFF" />
                  <rect x="62.3154" y="-190.173" width="543" height="77.5714" rx="38.7857" transform="rotate(45 62.3154 -190.173)" fill="#3B8AFF" />
                </g>
              </svg>
            </div> */}
          </Col>
          <Col md="6" className="d-md-block d-none bg-white p-0 mt-n1 vh-100 overflow-hidden">
            <div className='blur-sm'>
              <img src={auth1} alt="Image" className="w-full h-auto Image-fluid gradient-main animated-scaleX" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  )
};

export default Login;
