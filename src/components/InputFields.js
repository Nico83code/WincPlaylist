import React, { useState } from "react";

function InputFields(props) {
  const [song, setSong] = useState("");
  const [artist, setArtist] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (evt) => {
    console.log("sumbited");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Song"
        type="text"
        value={song}
        onChange={(e) => setSong(e.target.value)}
      />
      <input
        placeholder="Artist"
        type="text"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <select>
        <option value="Jazz">Jazz</option>
        <option value="R&B">R&B</option>
        <option value="Rock">Rock</option>
      </select>

      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>

      <input type="submit" value="Add Song" />
    </form>
  );
}
export default InputFields;
