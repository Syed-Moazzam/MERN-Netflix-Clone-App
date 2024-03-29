import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchDataByGenre } from "../store";

export default function GenreDropDown({ genres, type, setLoading }) {
  const dispatch = useDispatch();
  const genresLoaded = useSelector((state) => state.netflix.genresLoaded);

  const handleDropDownChange = (e) => {
    setLoading(true);
    dispatch(
      fetchDataByGenre({
        genres,
        genre: e.target.value,
        type,
      }));

    if (genresLoaded) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }

  return (
    <Select
      className="flex"
      onChange={handleDropDownChange}
    >
      {genres?.map((genre) => {
        return (
          <option value={genre.id} key={genre.id}>
            {genre.name}
          </option>
        );
      })}
    </Select>
  );
}

const Select = styled.select`
  margin-left: 5rem;
  cursor: pointer;
  outline: none;
  font-size: 1.1rem;
  background-color: black;
  width: fit-content;
  color: white;
`;
