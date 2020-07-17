import React, { useEffect, useState } from "react";
import Song from "./Song";
import "./components.css";

function Container() {
  const apiUrl = "https://playlist-84d33.firebaseio.com/playlist.json";
  const [songData, setSongData] = useState();

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
      // const result = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (event) => {
    removeData(event);
  };

  return (
    <div className="app">
      <div>
        <table>
          <tbody>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Rating</th>
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
