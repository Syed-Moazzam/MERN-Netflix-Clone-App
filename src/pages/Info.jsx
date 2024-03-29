import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import { useSelector } from "react-redux";
import NotAvailable from "../components/NotAvailable";

export default function Info() {
  const navigate = useNavigate();
  const location = useLocation();
  const movie = location?.state?.id;
  var x = movie?.genres;

  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (genresLoaded) setLoading(false);
  }, [genresLoaded]);

  setTimeout(() => {
    if (!genresLoaded) setLoading(false);
  }, 2000);

  return (
    <Container>
      {loading ? <Loader style={{ height: '703px' }} /> : !genresLoaded ? <NotAvailable customStyling={{ marginTop: '20rem' }} text={'No Information Available! You Might Not Have Selected A TV Show Or Movie.'} /> :
        <div className="player">
          <div className="back">
            <BsArrowLeft onClick={() => navigate(-1)} />
          </div>
          <div className="movie">
            <img src={`https://image.tmdb.org/t/p/original/${movie.image}`} alt="movie Img" />
            <div className="name">
              Name :  {movie.name}

            </div>
            <div className="others">
              Genres :
              {
                x.map((r, index) => {
                  if (index === x?.length - 1) return <span key={index} className="gen">{r}</span>
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
  .no-data-available-heading-info-page {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
  }
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 2.5rem;
        cursor: pointer;
      }
    }
    .movie {
      height: 100%;
      width: 100%;
      text-align: center;
      color: white;
      img{
        height: 425px;
        width: 60%;
        margin: 3.5rem auto 2rem;
      }
      .name{
        font-size: 4rem;
        font-weight: bold;
      }
      .others{
        font-size: 3rem;
        font-weight: bold;
      width: 100%;
      text-align: center;
      .gen{
        margin-left: 20px;
      }
      }

    }

  }
`;
