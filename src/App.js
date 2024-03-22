import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import Login from './pages/Login';
import Movies from './pages/Movies'
import Home from './pages/Home';
import Player from './pages/Player';
import Signup from './pages/Signup';
import TVShows from './pages/TVShows';
import Info from './pages/Info';
import ListedMovies from './pages/ListedMovies';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProtectedRoute path={'/'} component={Home} />} />
        <Route path="/login" element={<ProtectedRoute path={'/login'} component={Login} />} />
        <Route path="/sign-up" element={<ProtectedRoute path={'/sign-up'} component={Signup} />} />
        <Route path="/player" element={<ProtectedRoute path={'/player'} component={Player} />} />
        <Route path="/tv-shows" element={<ProtectedRoute path={'/tv-shows'} component={TVShows} />} />
        <Route path="/movies" element={<ProtectedRoute path={'/movies'} component={Movies} />} />
        <Route path="/info" element={<ProtectedRoute path={'/info'} component={Info} />} />
        <Route path="/new" element={<ProtectedRoute path={'/new'} component={Player} />} />
        <Route path="/my-list" element={<ProtectedRoute path={'/my-list'} component={ListedMovies} />} />
      </Routes>
    </BrowserRouter>
  );
}
