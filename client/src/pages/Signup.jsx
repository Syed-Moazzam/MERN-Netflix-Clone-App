import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "../assets/bg.jpg";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      // Show success message
      toast.success("Signup successful! Welcome aboard!");
    } catch (error) {
      console.log(error);
      // Show error message
      toast.error("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <div className="content relative z-10 w-screen" style={{ height: '703px' }}>
        <img className="h-full w-full absolute top-0 left-0 opacity-50" src={background} alt="background" style={{ zIndex: '-1' }} />
        <Header login={"login"} />
        <div className="body flex flex-col items-center justify-center" style={{ height: `${703 - 80}px` }}>
          <div className="text text-center">
            <h1 className="text-4xl font-extrabold mb-4 text-white">
              Unlimited movies, TV shows, and more.
            </h1>
            <h4 className="text-2xl mb-4 text-white">Watch anywhere. Cancel anytime.</h4>
            <h6 className="text-xl mb-8 text-white">
              Ready to watch? Enter your email to create or restart membership.
            </h6>
          </div>
          <div className="form w-full max-w-md">
            <input
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="block w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
              style={{ border: '1px solid rgb(180 173 173)', outline: 'none' }}
            />
            {showPassword && (
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="block w-full p-4 mb-4 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 bg-gray-900 bg-opacity-50"
                style={{ border: '1px solid rgb(180 173 173)', outline: 'none' }}
              />
            )}
            {!showPassword && (
              <button
                onClick={() => setShowPassword(true)}
                className="block w-full p-4 mb-4 text-white rounded-md hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: 'rgb(229, 9, 20)' }}
              >
                Get Started
              </button>
            )}
            {showPassword && (
              <button
                onClick={handleSignUp}
                className="block w-full p-4 mb-4 text-white rounded-md hover:bg-red-700 focus:ring-blue-500 focus:border-blue-500"
                style={{ backgroundColor: 'rgb(229, 9, 20)' }}
              >
                Register Now
              </button>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}