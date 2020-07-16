import React from "react";

function Container(props) {
  const baseUrl = "https://playlist-84d33.firebaseio.com/";

  const getData = async () => {
    try {
      const apiUrl = `${baseUrl}/playlist.json`;
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();

      let song = Object.keys(result).map((key) => ({
        id: key,
        artist: result[key].artist,
        genre: result[key].genre,
        rating: result[key].rating,
        song: result[key].song,
      }));
      return song;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getData());

  return (
    <div>
      <h1>container</h1>
    </div>
  );
}

export default Container;
