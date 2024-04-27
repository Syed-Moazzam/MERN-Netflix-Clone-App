import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { firebaseAuth } from "../utils/firebase-config";
import { FaPowerOff, FaSearch } from "react-icons/fa";
import { toast } from "react-toastify";

export default function DesktopHeader({ style, email, showLoginBtn }) {
  const navigate = useNavigate();
  const [showSearch, setShowSearch] = useState(false);
  const [inputHover, setInputHover] = useState(false);

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv-shows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/my-list" },
  ];

  const handleUserSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    signOut(firebaseAuth);
    toast.success('Signed out successfully!');
    navigate('/login');
  }

  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (isLoggedIn) {
    return (
      <Container>
        <nav className={`flex`} style={{ ...style }}>
          <div className="left flex a-center">
            <div className="brand flex a-center j-center">
              <img src={logo} alt="Logo" />
            </div>
            <ul className="links flex">
              {links.map(({ name, link }) => {
                return (
                  <li key={name}>
                    <Link to={link}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="right flex a-center">
            <span>{email}</span>

            <div className={`search ${showSearch ? "show-search" : ""}`}>
              <button
                onFocus={() => setShowSearch(true)}
                onBlur={() => {
                  if (!inputHover) {
                    setShowSearch(false);
                  }
                }}
              >
                <FaSearch />
              </button>
              <input
                type="text"
                placeholder="Search"
                onMouseEnter={() => setInputHover(true)}
                onMouseLeave={() => setInputHover(false)}
                onBlur={() => {
                  setShowSearch(false);
                  setInputHover(false);
                }}
              />
            </div>

            <button onClick={handleUserSignOut}>
              <FaPowerOff />
            </button>
          </div>
        </nav>
      </Container>
    );
  }
  else {
    return (
      <header className="flex items-center justify-between px-4 md:px-8 py-2">
        <div className="logo">
          <img className="h-16" src={logo} alt="logo" />
        </div>
        <button
          onClick={() => navigate(showLoginBtn ? "/login" : "/sign-up")}
          className={'px-4 py-2 rounded text-white font-bold'}
          style={{ backgroundColor: 'rgb(229, 9, 20)' }}
        >
          {showLoginBtn ? "Log In" : "Sign Up"}
        </button>

        <style>{`
        @media (max-width: 768px) {
          header {
            padding: 1rem;
          }
          .logo img {
            height: 4rem;
          }
          button {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          header {
            padding: 0.5rem;
          }
          .logo img {
            height: 3.5rem;
          }
          button {
            padding: 0.5rem;
            font-size: 0.9rem;
          }
        }
      `}</style>
      </header>
    )
  }
}

const Container = styled.div`
  nav {
    height: 6.5rem;
    width: 100%;
    justify-content: space-between;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 0 4rem;
    align-items: center;
    transition: 0.3s ease-in-out;
    .left {
      gap: 2rem;
      .brand {
        img {
          height: 4rem;
        }
      }
      .links {
        list-style-type: none;
        gap: 2rem;
        li {
          a {
            color: white;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 1rem;
      button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        &:focus {
          outline: none;
        }
        svg {
          color: #f34242;
          font-size: 1.2rem;
        }
      }
      .search {
        display: flex;
        gap: 0.4rem;
        align-items: center;
        justify-content: center;
        padding: 0.2rem;
        padding-left: 0.5rem;
        button {
          background-color: transparent;
          border: none;
          &:focus {
            outline: none;
          }
          svg {
            color: white;
            font-size: 1.2rem;
          }
        }
        input {
          width: 0;
          opacity: 0;
          visibility: hidden;
          transition: 0.3s ease-in-out;
          background-color: transparent;
          border: none;
          color: white;
          &:focus {
            outline: none;
          }
        }
      }
      span{
        position: relative;
      }
      .show-search {
        border: 1px solid white;
        background-color: rgba(0, 0, 0, 0.6);
        input {
          width: 100%;
          opacity: 1;
          visibility: visible;
          padding: 0.3rem;
        }
      }
    }
  }
`;