import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DesktopHeader from "../components/DesktopHeader";
import MobileHeader from "../components/MobileHeader";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import Slider from "../components/Slider";
import Loader from "../components/Loader";
import useMobileHeader from '../utils/check-screen-width';

function Home() {
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoading = useSelector((state) => state.netflix.genresLoading);

  const [email, setEmail] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const showMobileHeader = useMobileHeader();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getMoviesFromRange = (from, to) => {
    return movies?.slice(from, to);
  };

  useEffect(() => {
    if (!genresLoading) {
      dispatch(fetchMovies({ genres, type: "all" }));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
    });

    dispatch(getGenres());
  }, [genresLoading]);

  var data = getMoviesFromRange(0, 100);
  var x = Math.floor(Math.random() * data?.length);
  var mv = x && data[x];
  if (!mv) {
    mv = {
      "id": 453395,
      "name": "Doctor Strange in the Multiverse of Madness",
      "image": "/wcKFYIiVDvRURrzglV9kGu7fpfY.jpg",
      "genres": [
        "Fantasy",
        "Action",
        "Adventure"
      ]
    }
  }

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  });

  return (
    <Container>
      {loading ? <Loader style={{ height: '100vh' }} /> :
        <>
          {showMobileHeader ? <MobileHeader /> : <DesktopHeader style={{ backgroundColor: isScrolled && 'black' }} email={email} />}
          <div className="hero">
            <img
              src={`https://image.tmdb.org/t/p/original/${mv?.image}`}
              alt="background"
              className="background-image"
            />
            <div className="container">
              <div className="logo">
                {mv.name}
              </div>
              <div className="buttons flex">
                <button
                  onClick={() => navigate("/player", { state: { id: mv } })}
                  className="flex j-center a-center"
                >
                  <FaPlay />
                  Play
                </button>
                <button onClick={() => navigate("/info", { state: { id: mv } })} className="flex j-center a-center">
                  <AiOutlineInfoCircle />
                  More Info
                </button>
              </div>
            </div>
          </div>
          <Slider movies={movies} />
        </>
      }
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  margin-bottom: 2.8rem;

  .hero {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 703px;
    margin-bottom: 10px;

    .background-image {
      filter: brightness(60%);
      height: 100%;
      width: 100%;
      position: absolute;
      top: 0rem;
      left: 0rem;
    }

    img {
      width: 100vw;
      height: 100%;
    }

    .container {
      position: relative;
      z-index: 5;
      margin: 2rem 0rem 0rem 5rem;

      .logo {
        width: 75%;
        height: 100%;
        font-size: 4rem;
        font-weight: bold;
      }

      .buttons {
        margin: 4rem 0rem 0rem;
        gap: 2rem;
        button {
          font-size: 1.4rem;
          gap: 1rem;
          border-radius: 0.2rem;
          padding: 0.5rem;
          padding-left: 2rem;
          padding-right: 2.4rem;
          border: none;
          cursor: pointer;
          transition: 0.2s ease-in-out;
          &:hover {
            opacity: 0.8;
          }

          &:nth-of-type(2) {
            background-color: rgba(109, 109, 110, 0.7);
            color: white;
            svg {
              font-size: 1.8rem;
            }
          }
        }
      }
    }

    @media screen and (max-width: 768px) {
      .container {
        .logo {
            font-size: 3.4rem;
        }
      }
    }

    @media screen and (max-width: 576px) {
      .container {
        .logo {
            font-size: 3rem;
        }

        .buttons {
          margin-right: 2rem;
          margin-bottom: 1rem;
          gap: 1.5rem;
          button {
            font-size: 1.2rem;
            gap: 1rem;
            padding: 0.8rem 1.5rem;
          }
        }
      }
    }

    @media screen and (max-width: 430px) {
      .container {
        margin-left: 4.2rem;
        .logo {
            font-size: 2.8rem;
        }

      .buttons {
        margin-top: 3.8rem;
          gap: 1rem !important;
          button {
            font-size: 1rem !important;
            gap: 1rem !important;
            padding: 0.8rem 1.2rem !important;
          }
        }
      }
    }
`;

export default Home;