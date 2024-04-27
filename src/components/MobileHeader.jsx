import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaBars, FaPowerOff } from "react-icons/fa";
import logo from "../assets/logo.png";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { firebaseAuth } from "../utils/firebase-config";

const MobileHeader = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const navigate = useNavigate();

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  };

  const handleUserSignOut = () => {
    localStorage.removeItem('isLoggedIn');
    signOut(firebaseAuth);
    toast.success('Signed out successfully!');
    navigate('/login');
  }

  const links = [
    { name: "Home", link: "/" },
    { name: "TV Shows", link: "/tv-shows" },
    { name: "Movies", link: "/movies" },
    { name: "My List", link: "/my-list" },
  ];

  return (
    <>
      <StyledMobileHeader style={{ backgroundColor: (isToggleOpen || window.scrollY > 0) && 'rgb(0 0 0 / 85%)' }}>
        <div className="nav_logo">
          <img src={logo} alt="Logo" className="logo" />
        </div>

        <NavMenu isToggleOpen={isToggleOpen}>
          {links.map(({ name, link }) => {
            return (
              <li key={name}>
                <Link to={link} className="nav-menu-list">{name}</Link>
              </li>
            );
          })}
        </NavMenu>
        <FaPowerOff className="logoutBtn" onClick={handleUserSignOut} />
        <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
      </StyledMobileHeader>
    </>
  );
};

const StyledMobileHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 10;
  transition: background-color 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  background-color: transparent;
  width: 100%;
  padding: 10px 12px 14px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .nav_logo {
    padding: 0 12px;
    .logo {
      height: 4rem;
    }
  }
  .logoutBtn {
    position: absolute;
    right: 72px;
    top: 30px;
    cursor: pointer;
    color: #f34242;
    font-size: 20px;
  }
  .menuToggleBtn {
    display: none;
    position: absolute;
    right: 24px;
    top: 30px;
    cursor: pointer;
    color: white;
    font-size: 20px;
  }

  @media screen and (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    .menuToggleBtn {
      display: block;
    }
  }

  @media screen and (max-width: 576px) {
    .nav_logo {
      .logo {
        height: 3.5rem;
      }
    }

    .logoutBtn, .menuToggleBtn {
      top: 28px;
    }
  }
`;

const NavMenu = styled.ul`
  list-style: none;
  display: flex;

  li {
    &:hover {
      cursor: pointer;
      background: #44a8f4;
      border-radius: 4px;
    }
  }
  .nav-menu-list {
    text-align: center;
    text-decoration: none;
    color: white;
    display: block;
    padding: 10px 10px;
    font-size: 16.5px;
  }

  @media screen and (max-width: 992px) {
    display: ${(props) => (props.isToggleOpen ? "block" : "none")};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 5px;
  }
`;

export default MobileHeader;