import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import styled from "styled-components";
import DesktopHeader from "../components/DesktopHeader";
import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import NotAvailable from "../components/NotAvailable";
import Loader from "../components/Loader";
import useMobileHeader from "../utils/check-screen-width";
import MobileHeader from "../components/MobileHeader";

export default function ListedMovies() {
  const movies = useSelector((state) => state.netflix.movies);
  const likedMoviesLoading = useSelector((state) => state.netflix.likedMoviesLoading);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const showMobileHeader = useMobileHeader();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
    });

    if (email) dispatch(getUsersLikedMovies(email));

    if (!likedMoviesLoading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [email, likedMoviesLoading]);

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  });

  return (
    <Container>
      {showMobileHeader ? <MobileHeader /> : <DesktopHeader style={{ backgroundColor: isScrolled && 'black' }} email={email} />}
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {loading ? <Loader style={{ height: '60vh' }} /> : movies?.length > 0 ? (
            movies?.map((movie, index) => (
              <Card
                movieData={movie}
                isLiked={true}
                key={index}
              />
            ))
          ) : <NotAvailable customStyling={{ height: '50vh' }} text={'No Liked Movies Found!'} navigateBack={false} />}
        </div>
      </div>
    </Container>
  );
}


const Container = styled.div`
  margin-bottom: 2.8rem;

  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 2rem;
    h1 {
      margin-left: 2rem;
      color: white;
      font-weight: 500;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
      margin-left: 2rem;
    }
  }
`;
