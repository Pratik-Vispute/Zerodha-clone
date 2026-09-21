import React, { useEffect, useState } from "react";
import Navbar from "../../Navbar";
import Hero from "./Hero";
import Awards from "./Awards";
import Education from "./Education";
import Pricing from "./Pricing";
import Stats from "./Stats";
import OpenAccount from "../../OpenAccount";
import Footer from "../../Footer";

import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const HomePage = () => {
  // const navigate = useNavigate();
  // const [cookies, removeCookie] = useCookies(["token"]);
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   const verifyCookie = async () => {
  //     try {
  //       if (!cookies.token) {
  //         navigate("/login");
  //         return;
  //       }

  //       const { data } = await axios.post(
  //         "http://localhost:3002/",
  //         {},
  //         { withCredentials: true }
  //       );

  //       const { status, user } = data;

  //       if (status) {
  //         setUsername(user);
  //         toast(`Hello ${user}`, {
  //           position: "top-right",
  //         });
  //       } else {
  //         removeCookie("token");
  //         navigate("/login");
  //       }
  //     } catch (error) {
  //       console.log(error);
  //       removeCookie("token");
  //       navigate("/login");
  //     }
  //   };

  //   verifyCookie();
  // }, [cookies, navigate, removeCookie]);

  // const Logout = () => {
  //   removeCookie("token");
  //   navigate("/Hero");
  // };

  return (
    <>
     
      {/* <div className="home_page">
        <h4>
          Welcome <span>{username}</span>
        </h4>

        <button onClick={Logout}>LOGOUT</button>
      </div>

       <ToastContainer /> */}

      <Hero />
      <Awards />
      <Stats />
      <Pricing />
      <Education />
      <OpenAccount />


      
    </>
  );
};

export default HomePage;