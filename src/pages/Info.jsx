import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import NotAvailable from "../components/NotAvailable";

export default function Info() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location?.state?.id;
  const movieGenres = movie?.genres;

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <Container>
      {loading ? <Loader style={{ height: '100vh' }} /> : !movieGenres ? <NotAvailable customStyling={{ height: '100vh' }} text={'No Information Available! You Might Not Have Selected A TV Show Or Movie.'} navigateBack={true} /> :
        <div className="player">
          <div className="back-btn-info">
            <BsArrowLeft onClick={() => navigate(-1)} />
          </div>
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/original/${movie?.image}`} alt="movie Img" />
            <div className="name">
              Name :  {movie?.name}

            </div>
            <div className="others">
              Genres :
              {
                movieGenres?.map((r, index) => {
                  if (index === movieGenres?.length - 1) return <span key={index} className="gen">{r}</span>
                  else return <span key={index} className="gen">{r} ,</span>
                })
              }

            </div>
          </div>
        </div>}
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100%;
    position: relative;
    padding: 6rem 3rem 4rem;
    .back-btn-info {
      position: fixed;
      left: 28px;
      top: 34px;
      z-index: 5;
      svg {
        font-size: 2.3rem;
        cursor: pointer;
      }
    }
    .movie {
      height: 100%;
      width: 100%;
      text-align: center;
      color: white;
      img{
        height: 350px;
        width: 100%;
        margin: 0rem auto 2rem;
      }
      .name{
        font-size: 3rem;
        font-weight: bold;
      }
      .others {
        font-size: 2rem;
        font-weight: bold;
        width: 100%;
        text-align: center;
        .gen {
          margin-left: 20px;
        }
      }
    }
  }

  @media screen and (min-width: 992px) {
    .player {
      .movie {
        img{
          width: 80%;
          height: 500px;
        }
        .name{
          font-size: 3.5rem;
        }
        .others {
          font-size: 2.5rem;
        }
      }
    }
  }
`;
