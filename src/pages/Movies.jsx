import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import Loader from "../components/Loader";
import GenreDropDown from "../components/GenreDropDown";

function Movies() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ genres, type: "movie" }));
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }

    dispatch(getGenres());
    onAuthStateChanged(firebaseAuth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser.uid);
        setEmail(currentUser.email);
      }
    });
  }, [genresLoaded]);


  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  });

  return (
    <Container>
      <div className="navbar">
        <Navbar style={{ backgroundColor: isScrolled && 'black' }} email={email} />
      </div>
      <div className="data">
        <GenreDropDown genres={genres} type="movie" setLoading={setLoading} />
        {loading ? <Loader style={{ marginTop: '6rem' }} /> : movies?.length ? <Slider movies={movies} /> : <NotAvailable customStyling={{ marginTop: '5rem' }} text={'No Movies Available For The Selected Genre! Please Select A Different Genre.'} />}
      </div>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 2.8rem;

  .data {
    margin-top: 8rem;
  }

  .movies-not-available {
    margin-top: 1rem;
  }
`;

export default Movies;
