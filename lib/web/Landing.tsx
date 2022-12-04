import React from "react";

import { Container, Grid, Spacer } from "@nextui-org/react";

import Person from "./Person";
import styles from "./Landing.module.scss";

import danielUrl from "./img/daniel.jpg";
import dianeUrl from "./img/diane.jpg";
import paulUrl from "./img/paul.jpg";

const people: PersonProps[] = [
  {
    name: "Daniel Frankcom",
    img: danielUrl,
    link: "https://github.com/danielfrankcom",
  },
  {
    name: "Diane Frankcom",
    img: dianeUrl,
    link: "https://ca.linkedin.com/in/diane-frankcom-1317154",
  },
  {
    name: "Paul Frankcom",
    img: paulUrl,
    link: "https://allgearsdrivingschool.ca",
  },
];

import { Button } from "@nextui-org/react";

class Landing extends React.Component {
  render() {
    return (
      <div className={styles.landing}>
        <div className={styles.questionContainer}>
          <p className={styles.questionText}>Who are you looking for?</p>
        </div>
        <div className={styles.people}>
          {people.map((person) => (
            <div className={styles.person}>
              <Person
                name={person.name}
                img={person.img}
                link={person.link}
                key={name}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Landing;
