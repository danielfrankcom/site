import React from "react";
import Person from "./Person";

import danielUrl from "./img/daniel.jpg";
import dianeUrl from "./img/diane.jpg";
import paulUrl from "./img/paul.jpg";

const people = {
  Daniel: danielUrl,
  Diane: dianeUrl,
  Paul: paulUrl,
};

export default function App() {
  return (
    <div>
      <h1>Who are you looking for?</h1>
      <div id="people">
        {Object.keys(people).map((name) => (
          <Person name={name} img_url={people[name]} />
        ))}
      </div>
    </div>
  );
}
