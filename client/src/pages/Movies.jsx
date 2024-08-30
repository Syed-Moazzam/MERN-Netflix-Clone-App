import React, { useEffect, useState } from "react";
import styled from "styled-components";
import DesktopHeader from "../components/DesktopHeader";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import Slider from "../components/Slider";
import NotAvailable from "../components/NotAvailable";
import Loader from "../components/Loader";
import GenreDropDown from "../components/GenreDropDown";
import useMobileHeader from "../utils/check-screen-width";
import MobileHeader from "../components/MobileHeader";

function Movies() {
  const movies = useSelector((state) => state.netflix.movies);
  const genres = useSelector((state) => state.netflix.genres);
  const genresLoading = useSelector((state) => state.netflix.genresLoading);

  const [isScrolled, setIsScrolled] = useState(false);
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const showMobileHeader = useMobileHeader();

  const dispatch = useDispatch();

  useEffect(() => {
    if (!genresLoading) {
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
  }, [genresLoading]);


  window.addEventListener('scroll', () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
  });

  return (
    <Container>
      <div className="navbar">
        {showMobileHeader ? <MobileHeader /> : <DesktopHeader style={{ backgroundColor: isScrolled && 'black' }} email={email} />}
      </div>
      <div className="data">
        <GenreDropDown genres={genres} type="movie" setLoading={setLoading} />
        {loading ? <Loader style={{ height: '60vh' }} /> : movies?.length ? <Slider movies={movies} /> : <NotAvailable customStyling={{ height: '50vh' }} text={'No Movies Available For The Selected Genre! Please Select A Different Genre.'} navigateBack={false} />}
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
