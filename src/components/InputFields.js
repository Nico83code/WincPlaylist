import React, { useState } from "react";
import "./components.css";

function InputFields(props) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const apiUrl = "https://playlist-84d33.firebaseio.com/playlist.json";

  const postData = async () => {
    try {
      let response = await fetch(apiUrl, {
        method: "POST",
        body: JSON.stringify({
          artist: artist,
          genre: genre,
          rating: rating,
          title: song,
        }),
      });
      const result = await response.json();
      return result;
    } catch (error) {
      console.log(error);
    }
  };
 
  const handleSubmit = (event) => {
    postData(event);
  };

  const onChangeSong = (event) => {
    setSong(event.target.value);
  };
  const onChangeArtist = (event) => {
    setArtist(event.target.value);
  };
  const onChangeGenre = (event) => {
    setGenre(event.target.value);
  };

  const onChangeRating = (event) => {
    setRating(event.target.value);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Song"
          type="text"
          value={song}
          onChange={onChangeSong}
        />
        <input
          placeholder="Artist"
          type="text"
          value={artist}
          onChange={onChangeArtist}
        />
        <select onChange={onChangeGenre}>
          <option value="selectgenre">select genre</option>
          <option value="Jazz">Jazz</option>
          <option value="R&B">R&B</option>
          <option value="Rock">Rock</option>
          <option value="Rock">Pop</option>
          <option value="Rock">Hip-Hop</option>
          <option value="Rock">Soul</option>
          <option value="Rock">Country</option>
          <option value="Rock">Metal</option>
        </select>

        <select onChange={onChangeRating}>
          <option value="selectrating">select rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>

        <input type="submit" value="Add Song" />
      </form>
    </div>
  );
}
export default InputFields;
