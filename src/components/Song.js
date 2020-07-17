import React from "react";
import "./components.css";

function Song(props) {
  return (
    <div className="list-item">
      <table>
        <tbody>
          <tr>
            <td>{props.title}</td>
            <td>{props.artist}</td>
            <td>{props.genre}</td>
            <td>{props.rating}</td>
            <td>
              <button onClick={(event) => props.handleDelete(props.id)}>
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
