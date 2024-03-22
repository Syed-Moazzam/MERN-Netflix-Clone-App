import { React, useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate, useLocation } from "react-router-dom";
import YouTube from 'react-youtube';
import Loader from "../components/Loader";

export default function Player() {
  const navigate = useNavigate();
  const location = useLocation();
  const [trailer, setTrailer] = useState("_Z3QKkl1WyM")

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://api.themoviedb.org/3/movie/${location.state.id.id}?api_key=6d75b2a2e2b05ca51b4dda2ad6426fda&append_to_response=videos`)
      .then(response => {
        const x = response.data.videos.results.find(vid => vid.name === "Official Trailer")
        setTrailer(x.key)
      })
      .catch(error => {
        console.log(error)
      });
  }, []);

  setTimeout(() => {
    setLoading(false);
  }, 1500);

  return (
    <Container>
      {loading ? <Loader style={{ height: '703px' }} /> : <div className="player">
        <div className="back">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <YouTube videoId={trailer} className="video" opts={
          {
            width: '100%',
            height: '100%',
            playerVars: {
              autoplay: 1,
              controls: 0,
              cc_load_policy: 0,
              fs: 0,
              iv_load_policy: 0,
              modestbranding: 0,
              rel: 0,
              showinfo: 0,
            },
          }
        } />
      </div>}
    </Container>
  );
}

const Container = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .back {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
      }
    }
    .video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
`;
