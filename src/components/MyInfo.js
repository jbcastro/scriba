import React from "react";
import huh from "../img/huh.PNG";
function MyInfo() {
  return (
    <main>
      <h1>Joe</h1>
      <p>I am cool and handsome</p>
      <ul>
        <li>Paris</li>
        <li>France</li>
        <li>Spain</li>
      </ul>
      <img src={huh} />
    </main>
  );
}

export default MyInfo;
