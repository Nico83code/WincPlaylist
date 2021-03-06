import React from "react";
import "./components.css";

function Song(props) {
  return (
    <div className="">
      <table>
        <tbody>
          <tr>
            <td >{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td>
              <button onClick={(id) => props.handleDelete(props.id)}>
                delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Song;
