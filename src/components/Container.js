import React, { useEffect, useState } from "react";
import Song from "./Song";
import "./components.css";

function Container() {
  const apiUrl = "https://playlist-84d33.firebaseio.com/playlist.json";
  const [songData, setSongData] = useState([]);
  const [sorting, setSorting] = useState("All");

  const getData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();

      let song = Object.keys(result).map((key) => ({
        id: key,
        artist: result[key].artist,
        genre: result[key].genre,
        rating: result[key].rating,
        title: result[key].title,
      }));

      setSongData(song);
      // return song;
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(songData);

  useEffect((event) => {
    getData(event);
  }, []);

  if (!songData) return "loading";

  const baseUrl = "https://playlist-84d33.firebaseio.com";

  const removeData = async (hashId) => {
    try {
      const apiUrl = `${baseUrl}/playlist/${hashId}.json`;
      let response = await fetch(apiUrl, { method: "DELETE" });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (id) => {
    setSongData(songData.filter((song) => song.id !== id));
    removeData(id);
  };

  const onChangeSort = (event) => {
    // console.log("User changed the value", event.target.value);
    setSorting(event.target.value);
  };

  const newArray =
    sorting === "all"
      ? songData
      : sorting === "Rock"
      ? songData.filter((song) => song.genre === "Rock")
      : sorting === "R&B"
      ? songData.filter((song) => song.genre === "R&B")
      : sorting === "A-Z"
      ? songData.sort((a, b) => (a.title > b.title ? 1 : -1))
      : sorting === "Z-A"
      ? songData.sort((a, b) => (b.title > a.title ? 1 : -1))
      : sorting === "1-5"
      ? songData.sort((a, b) => (a.rating > b.rating ? 1 : -1))
      : sorting === "5-1"
      ? songData.sort((a, b) => (b.rating > a.rating ? 1 : -1))
      : songData;

  return (
    <div>
      <div>
        <div className="sortingbtn">
          <label>filter</label>
          <select onChange={onChangeSort}>
            <option value="all">All</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            <option value="1-5">rating 1-5</option>
            <option value="5-1">rating 5-1</option>
            <option value="Rock">Rock</option>
            <option value="R&B">R&B</option>
          </select>
        </div>
        <table>
          <tbody>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Rating</th>
              <th></th>
            </tr>
          </tbody>
        </table>

        {newArray
          ? newArray.map((song) => (
              <Song
                key={song.id}
                id={song.id}
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                rating={song.rating}
                handleDelete={handleDelete}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Container;
