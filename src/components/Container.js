import React, { useEffect, useState } from "react";
import Song from "./Song";

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
      console.log("song", song);
      setSongData(song);
      // return song;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (!songData) return "loading";

  return (
    <div>
      <h1>container</h1>

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
                title={song.title}
                artist={song.artist}
                genre={song.genre}
                rating={song.rating}
              />
            ))
          : null}
      </div>
    </div>
  );
}

export default Container;
