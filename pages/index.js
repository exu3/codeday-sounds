import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const sounds = [
  {
    type: "🐮",
    sound: "/sounds/moo.m4a",
    description: "Christy: moooooooo",
  },
  {
    type: "😛",
    sound: "/sounds/asdfjkl.m4a",
    description: "Ava: adfjasdsdfkljsdf",
  },
  {
    type: "🪑",
    sound: "/sounds/chair.m4a",
    description: "a chair at CodeDay",
  },
  {
    type: "🐸",
    sound: "/sounds/ribbit.m4a",
    description: "Shubham: ribbit",
  },
  {
    type: "🦆",
    sound: "/sounds/quack.m4a",
    description: "Rebecca: quack",
  },
  {
    type: "🐁",
    sound: "/sounds/squeak.m4a",
    description: "Snoopy squeak",
  },
  {
    type: "🤷‍♂️",
    sound: "/sounds/quote.m4a",
    description: "It's Friday evening",
  },
  {
    type: "👆",
    sound: "/sounds/table-scratch.m4a",
    description: "Scratching the table",
  },
  {
    type: "👌",
    sound: "/sounds/snap.m4a",
    description: "Snap",
  },
  {
    type: "🚪",
    sound: "/sounds/door-knob.m4a",
    description: "Door knob",
  },
  {
    type: "💨",
    sound: "/sounds/fans.m4a",
    description: "When the fans are spinning",
  },
  {
    type: "🍼",
    sound: "/sounds/plastic-bottle.m4a",
    description: "When the fans are spinning",
  },
];

export default function Home() {
  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>sounds</title>
        <meta name="description" content="CodeDay sounds" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          sounds of <a>CodeDay</a>
        </h1>

        <div className={styles.grid}>
          {sounds.map((s) => (
            <div
              className={styles.card}
              aria-label={s.description}
              key={s.type}
              onClick={() => playSound(s.sound)}
            >
              {s.type}
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Made at CodeDay Bay Area Fall 2021</p>
      </footer>
    </div>
  );
}
