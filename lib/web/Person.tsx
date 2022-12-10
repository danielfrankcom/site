import React from "react";
import { useNavigate } from "react-router-dom";

import { Card, Link, Image } from "@nextui-org/react";

import styles from "./Person.module.scss";

type PersonProps = {
  img: URL;
  name: string;
  link: URL;
};

const Person = ({ img, name, link }: PersonProps) => (
  <Link href={link} className={styles.container}>
    <Card isHoverable isPressable>
      <Card.Body>
        <div className={styles.cardBody}>
          <Image showSkeleton src={img} className={styles.image} />
          <div className={styles.name}>
            {name.split(" ").map((part) => (
              <p className={styles.nameText} key={part}>
                {part}
              </p>
            ))}
          </div>
        </div>
      </Card.Body>
    </Card>
  </Link>
);

export default Person;
