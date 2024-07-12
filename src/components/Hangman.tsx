import { useEffect, useState } from "react";
import { randomizeWord } from "../helpers/helper";
import { alphabets } from "../constants/constants";

const Hangman = () => {
  const [word, setWord] = useState("");

  const reset = () => {
    setWord(randomizeWord());
  };

  useEffect(reset, []);

  const maskWord = word
    .split("")
    .map(() => "_")
    .join(" ");

  return (
    <div>
      <p className="mask">{maskWord}</p>
      {alphabets.map((letter, index) => (
        <button key={index}>{letter}</button>
      ))}
    </div>
  );
};

export default Hangman;
