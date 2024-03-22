import axios from "axios";
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { firebaseAuth } from "../utils/firebase-config";
import Card from "../components/Card";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { getUsersLikedMovies } from "../store";
import { useDispatch, useSelector } from "react-redux";
import NotAvailable from "../components/NotAvailable";
import Loader from "../components/Loader";

export default function ListedMovies() {
  const movies = useSelector((state) => state.netflix.movies);
  const dispatch = useDispatch();
  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) setEmail(currentUser.email);
    });

    if (email) dispatch(getUsersLikedMovies(email));
  }, [email]);

  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  });

  setTimeout(() => {
    setLoading(false);
  }, 6000);

  return (
    <Container>
      <Navbar style={{ backgroundColor: isScrolled && 'black' }} email={email} />
      <div className="content flex column">
        <h1>My List</h1>
        <div className="grid flex">
          {loading ? <Loader style={{ marginTop: '3.5rem' }} /> : movies?.length > 0 ? (
            movies?.map((movie, index) => (
              <Card
                movieData={movie}
                index={index}
                key={movie.id}
                isLiked={true}
              />
            ))
          ) : <NotAvailable text={'No Liked Movies Found!'} />}
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
