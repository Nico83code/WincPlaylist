import React from "react";

export default function api() {
  const baseUrl = "https://playlist-84d33.firebaseio.com/";

  const getData = async () => {
    try {
      const apiUrl = `${baseUrl}/playlist.json`;
      let response = await fetch(apiUrl, {
        method: "GET",
      });
      const result = await response.json();
      console.log("Result", result);
      let tasks = Object.keys(result).map((key) => ({
        id: key,
        description: result[key].description,
        done: result[key].done,
      }));
      return tasks;
    } catch (error) {
      console.log(error);
    }
  };

  console.log(getData());

  //   const postData = async (task) => {
  //     try {
  //       const apiUrl = `${baseUrl}/playlist.json`;
  //       let response = await fetch(apiUrl, {
  //         method: "POST",
  //         body: JSON.stringify({ description: task, done: false }),
  //       });
  //       const result = await response.json();
  //       return result;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const removeData = async (hashId) => {
  //     try {
  //       const apiUrl = `${baseUrl}/playlist/${hashId}.json`;
  //       let response = await fetch(apiUrl, { method: "DELETE" });
  //       const result = await response.json();

  //       location.reload();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   const putData = async (hashId, task) => {
  //     try {
  //       const apiUrl = `${baseUrl}/playlist/${hashId}.json`;
  //       let response = await fetch(apiUrl, {
  //         method: "PUT",
  //         body: JSON.stringify({ description: task }),
  //       });
  //       const result = await response.json();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <div>
      <h1>api</h1>
    </div>
  );
}
