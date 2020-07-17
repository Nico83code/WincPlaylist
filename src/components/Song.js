import React from "react";

function Song(props) {
  const baseUrl = "https://playlist-84d33.firebaseio.com";
  const removeData = async (hashId) => {
    try {
      const apiUrl = `${baseUrl}/playlist/${hashId}.json`;
      let response = await fetch(apiUrl, { method: "DELETE" });
      const result = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = (event) => {
    console.log("sumbited");
  };
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td>
              <button onClick={handleDelete}>delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Song;
