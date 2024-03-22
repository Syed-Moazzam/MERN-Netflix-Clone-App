import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import Footer from '../components/Footer';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import background from "../assets/bg.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      localStorage.setItem('isLoggedIn', true);
      toast.success("Signin successful! Welcome aboard!");
      navigate('/');
    } catch (error) {
      console.log(error.code);
      toast.error("Signin failed. Please try again.");
    }
  };

  return (
    <div className="relative w-screen z-10" style={{ height: '703px' }}>
      <img className="absolute top-0 left-0 w-full h-full opacity-50" src={background} alt="background" style={{ zIndex: '-1' }} />
      <Header />
      <div className="flex flex-col items-center justify-center h-full px-4 md:px-0" style={{ height: `${703 - 80}px` }}>
        <div className="bg-black bg-opacity-70 w-full rounded-lg" style={{ padding: '3rem', maxWidth: '28rem' }}>
          <div className="text-white text-2xl font-bold mb-6">Sign In</div>
          <div className="flex flex-col" style={{ gap: '1.5rem' }}>
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="px-4 py-3 rounded-sm text-stone-950 bg-transparent"
              required
              style={{ color: 'white', border: '1px solid #706d6d', outline: 'none' }}
            />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="px-4 py-3 rounded-sm text-stone-950 bg-transparent"
              required
              style={{ color: 'white', border: '1px solid #706d6d', outline: 'none' }}
            />
            <button
              onClick={handleLogin}
              className="px-4 py-3 rounded-sm cursor-pointer text-white font-bold"
              style={{ backgroundColor: 'rgb(229, 9, 20)' }}
            >
              Sign In
            </button>
          </div>
          <div className="text-white mt-4">
            New to Netflix?{" "}
            <Link to='/sign-up' style={{ color: 'rgb(229, 9, 20)', fontWeight: '500' }}>
              Sign up now.
            </Link>
            <br />
            <p style={{
              color: '#8c8c8c',
              fontSize: '14px',
              marginTop: '6px'
            }}>
              This page is protected by Google reCAPTCHA to ensure you're not
              a bot.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
