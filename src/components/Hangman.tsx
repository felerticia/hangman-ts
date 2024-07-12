import { useEffect, useState } from "react";
import { randomizeWord } from "../helpers/helper";

const Hangman = () => {
  const [word, setWord] = useState("");

  const reset = () => {
    setWord(randomizeWord());
  };

  useEffect(reset, []);

  return <div>{word}</div>;
};

export default Hangman;
