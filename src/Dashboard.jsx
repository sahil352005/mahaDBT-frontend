import React, { useEffect, useState, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button, Row, Col, Nav, Collapse, Navbar, Container } from 'react-bootstrap'
import Card from './Assets/Card'
import Logo from './Assets/logo'
import { Link } from 'react-router-dom'

import 'prismjs/prism';
import 'prismjs/themes/prism-okaidia.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules';
import SwiperCore from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import topImage from './Assets/01.png'

// install Swiper modules
SwiperCore.use([Navigation]);

function Dashboard() {

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  //--------- %tmp% code
  
    const appName = "SIH";
  
  //---------

  // Function to fetch profile data
  // const fetchProfile = async () => {
  //   try {
  //     const response = await axios.get('http://localhost:8080/profile', {
  //       withCredentials: true,
  //     });
  //     setUser(response.data.user);
  //   } catch (err) {
  //     console.log(err.response ? err.response.data.message : 'Failed to fetch profile');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   fetchProfile();
  // }, []);

  // if (loading) return <div>Loading...</div>;

  return (
    <Fragment>
    <span className="uisheet screen-darken"></span>
    <div
    className="header"
    style={{
      background: `url(${topImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "100vh",
      position: "relative",
    }}
  >
    {/* Nav Bar component */}
    <Container>
      <Nav className="rounded  navbar navbar-expand-lg navbar-light top-1">
        <Container>
          <Navbar.Brand href="" className="mx-2 d-flex align-items-center">
            <Logo color={true} />
            <h5 className="logo-title mx-3">{appName}</h5>
          </Navbar.Brand>
            <ul className="mb-2 navbar-nav ms-auto mb-lg-0 d-flex flex-row align-items-start ">
              <Nav.Item as="li" className="me-3 mb-2 mb-sm-0">
                <Button
                  variant="primary d-flex align-items-center gap-2"
                  aria-current="page"
                  target="_blank"
                >
                  <svg
                    className="icon-22"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.4274 2.5783C20.9274 2.0673 20.1874 1.8783 19.4974 2.0783L3.40742 6.7273C2.67942 6.9293 2.16342 7.5063 2.02442 8.2383C1.88242 8.9843 2.37842 9.9323 3.02642 10.3283L8.05742 13.4003C8.57342 13.7163 9.23942 13.6373 9.66642 13.2093L15.4274 7.4483C15.7174 7.1473 16.1974 7.1473 16.4874 7.4483C16.7774 7.7373 16.7774 8.2083 16.4874 8.5083L10.7164 14.2693C10.2884 14.6973 10.2084 15.3613 10.5234 15.8783L13.5974 20.9283C13.9574 21.5273 14.5774 21.8683 15.2574 21.8683C15.3374 21.8683 15.4274 21.8683 15.5074 21.8573C16.2874 21.7583 16.9074 21.2273 17.1374 20.4773L21.9074 4.5083C22.1174 3.8283 21.9274 3.0883 21.4274 2.5783Z"
                      fill="currentColor"
                    ></path>
                    <path
                      opacity="0.4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.01049 16.8079C2.81849 16.8079 2.62649 16.7349 2.48049 16.5879C2.18749 16.2949 2.18749 15.8209 2.48049 15.5279L3.84549 14.1619C4.13849 13.8699 4.61349 13.8699 4.90649 14.1619C5.19849 14.4549 5.19849 14.9299 4.90649 15.2229L3.54049 16.5879C3.39449 16.7349 3.20249 16.8079 3.01049 16.8079ZM6.77169 18.0003C6.57969 18.0003 6.38769 17.9273 6.24169 17.7803C5.94869 17.4873 5.94869 17.0133 6.24169 16.7203L7.60669 15.3543C7.89969 15.0623 8.37469 15.0623 8.66769 15.3543C8.95969 15.6473 8.95969 16.1223 8.66769 16.4153L7.30169 17.7803C7.15569 17.9273 6.96369 18.0003 6.77169 18.0003ZM7.02539 21.5683C7.17139 21.7153 7.36339 21.7883 7.55539 21.7883C7.74739 21.7883 7.93939 21.7153 8.08539 21.5683L9.45139 20.2033C9.74339 19.9103 9.74339 19.4353 9.45139 19.1423C9.15839 18.8503 8.68339 18.8503 8.39039 19.1423L7.02539 20.5083C6.73239 20.8013 6.73239 21.2753 7.02539 21.5683Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Login / Register
                </Button>
              </Nav.Item>
              {/* <Nav.Item as="li">
                <Button
                  variant="success d-flex align-items-center gap-2"
                  aria-current="page"
                  href="https://iqonic.design/item/hope-ui-pro/item-checkout/?coupon_code=DROPBY20"
                  target="_blank"
                >
                  <svg
                    className="icon-22"
                    width="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      opacity="0.4"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.91064 20.5886C5.91064 19.7486 6.59064 19.0686 7.43064 19.0686C8.26064 19.0686 8.94064 19.7486 8.94064 20.5886C8.94064 21.4186 8.26064 22.0986 7.43064 22.0986C6.59064 22.0986 5.91064 21.4186 5.91064 20.5886ZM17.1606 20.5886C17.1606 19.7486 17.8406 19.0686 18.6806 19.0686C19.5106 19.0686 20.1906 19.7486 20.1906 20.5886C20.1906 21.4186 19.5106 22.0986 18.6806 22.0986C17.8406 22.0986 17.1606 21.4186 17.1606 20.5886Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20.1907 6.34909C20.8007 6.34909 21.2007 6.55909 21.6007 7.01909C22.0007 7.47909 22.0707 8.13909 21.9807 8.73809L21.0307 15.2981C20.8507 16.5591 19.7707 17.4881 18.5007 17.4881H7.59074C6.26074 17.4881 5.16074 16.4681 5.05074 15.1491L4.13074 4.24809L2.62074 3.98809C2.22074 3.91809 1.94074 3.52809 2.01074 3.12809C2.08074 2.71809 2.47074 2.44809 2.88074 2.50809L5.26574 2.86809C5.60574 2.92909 5.85574 3.20809 5.88574 3.54809L6.07574 5.78809C6.10574 6.10909 6.36574 6.34909 6.68574 6.34909H20.1907ZM14.1307 11.5481H16.9007C17.3207 11.5481 17.6507 11.2081 17.6507 10.7981C17.6507 10.3781 17.3207 10.0481 16.9007 10.0481H14.1307C13.7107 10.0481 13.3807 10.3781 13.3807 10.7981C13.3807 11.2081 13.7107 11.5481 14.1307 11.5481Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Buy Now
                </Button>
              </Nav.Item> */}
            </ul>
          
        </Container>
      </Nav>
    </Container>

    {/* Swiper */}
    <Col className="my-5 flex" md="12" lg="12">
          <Row className="row-cols-1 w-full flex mx-auto">
            <div className="overflow-hidden d-slider1" data-aos="fade-up" data-aos-delay="800">
              <Swiper
                className="p-0 m-0 mb-2 list-inline"
                slidesPerView={1}
                spaceBetween={10}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                }}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  550: { slidesPerView: 2 },
                  991: { slidesPerView: 3 },
                  1400: { slidesPerView: 3 },
                  1500: { slidesPerView: 4 },
                  1920: { slidesPerView: 4 },
                  2040: { slidesPerView: 7 },
                  2440: { slidesPerView: 8 }
                }}
    
              >
                <SwiperSlide className="card card-slide" >
                  <div className="card-body justify-center">
                        <img src={require('./Assets/loginpage.jpg')}/>
                  </div>
                </SwiperSlide>
                {/*
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <div className="progress-detail">
                        <p className="mb-2">Total Profit</p>
                        <h4 className="counter">
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <div className="progress-detail">
                        <p className="mb-2">Total Cost</p>
                        <h4 className="counter">
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <div className="progress-detail">
                        <p className="mb-2">Revenue</p>
                        <h4 className="counter">
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <div className="progress-detail">
                        <p className="mb-2">Today</p>
                        <h4 className="counter">
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide className=" card card-slide">
                  <div className="card-body">
                    <div className="progress-widget">
                      <div className="progress-detail">
                        <p className="mb-2">Members</p>
                        <h4 className="counter">
                        </h4>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                */}
                <div className="swiper-button swiper-button-next"></div>
                <div className="swiper-button swiper-button-prev"></div>
              </Swiper>
            </div>
          </Row>
        </Col>
    {/* Body Component */}
    <div className="main-img">
      <div className="container">
        <svg
          width="150"
          viewBox="0 0 55 55"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="-0.423828"
            y="34.5762"
            width="50"
            height="7.14286"
            rx="3.57143"
            transform="rotate(-45 -0.423828 34.5762)"
            fill="white"
          />
          <rect
            x="14.7295"
            y="49.7266"
            width="50"
            height="7.14286"
            rx="3.57143"
            transform="rotate(-45 14.7295 49.7266)"
            fill="white"
          />
          <rect
            x="19.7432"
            y="29.4902"
            width="28.5714"
            height="7.14286"
            rx="3.57143"
            transform="rotate(45 19.7432 29.4902)"
            fill="white"
          />
          <rect
            x="19.7783"
            y="-0.779297"
            width="50"
            height="7.14286"
            rx="3.57143"
            transform="rotate(45 19.7783 -0.779297)"
            fill="white"
          />
        </svg>
        <h1 className="my-4">
          <span data-setting="app_name">{appName}</span>- Design System
        </h1>
        <h4 className="text-white mb-5">
          Production ready FREE Open Source <b>Dashboard UI Kit</b> and{" "}
          <b>Design System</b>.
        </h4>
        <div className="d-flex justify-content-center align-items-center">
          <div>
            <Link
              className="btn btn-light bg-white d-flex"
              to="/dashboard"
              target="_black"
            >
              <svg
                width="22"
                height="22"
                className="me-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                ></path>
              </svg>
              Dashboard Demo
            </Link>
          </div>
          <div className="ms-3">
               <Button bsPrefix=" btn btn-light bg-white d-flex" target="_blank" href="">
                  {/* <img src={github} width="24px" height="24px" alt="github"/> */}
                  <span className="text-danger mx-2 fw-bold">STAR US</span> 
                  <span>ON GITHUB</span>
              </Button>
          </div>

      </div>
    </div>
    </div>
  </div>
  </Fragment>
  //   <div>
  //   <h1>Dashboard</h1>
  //   <div>
  //     {user ? (
  //       // If user is not null, go to profile section
  //       <button onClick={() => navigate('/profile')}>Profile</button>
  //     ) : (
  //       // If user is null, go to login
  //       <button onClick={() => navigate('/login')}>Login</button>
  //     )}
  //   </div>
  // </div>
  )
}

export default Dashboard