import React, { useEffect, useState } from "react";
import Song from "./Song";
import "./components.css";

function Container() {
  const apiUrl = "https://playlist-84d33.firebaseio.com/playlist.json";
  const [songData, setSongData] = useState([]);
  const [sorting, setSorting] = useState("select");

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
      // console.log(typeof song);
      // console.log("song", song);
      setSongData(song);
      // return song;
    } catch (error) {
      console.log(error);
    }
  };

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
    console.log("User changed the value", event.target.value);
    setSorting(event.target.value);
  };
  if (sorting === "A-Z") {
    songData.sort((a, b) => (a.title > b.title ? 1 : -1));
  }

  if (sorting === "Z-A") {
    songData.sort((a, b) => (b.title > a.title ? 1 : -1));
  }

  if (sorting === "Rock") {
    songData.filter((genre) => {
      return genre.genre.includes("Rock");
    });
  }

  return (
    <div>
      <div>
        <div className="sortingbtn">
          <label>filter</label>
          <select onChange={onChangeSort}>
            <label>filter</label>
            <option value="sorting">select</option>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
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

        {songData
          ? songData.map((song) => (
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
