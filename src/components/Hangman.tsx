import { useEffect, useState } from "react";
import { randomizeWord } from "../helpers/helper";
import { alphabets } from "../constants/constants";

const Hangman = () => {
  const [word, setWord] = useState("");
  const [corrects, setCorrects] = useState<string[]>([]);
  const [fails, setFails] = useState<string[]>([]);

  const reset = () => {
    setWord(randomizeWord());
  };

  useEffect(reset, []);

  const maskWord = word
    .split("")
    .map(() => "_")
    .join(" ");

  const onGuess = (letter: string) => {
    if (word.includes(letter)) {
      setCorrects([...corrects, letter]);
    } else {
      setFails([...fails, letter]);
    }
  };

  return (
    <div>
      <p className="mask">{maskWord}</p>
      {alphabets.map((letter, index) => (
        <button
          disabled={corrects.includes(letter) || fails.includes(letter)}
          onClick={() => onGuess(letter)}
          key={index}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};

export default Hangman;
