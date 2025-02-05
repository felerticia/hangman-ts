import { useEffect, useState } from "react";
import { randomizeWord } from "../helpers/helper";
import { alphabets } from "../constants/constants";
import Progress from "./Progress";
import Popup from "./Popup";

const Hangman = () => {
  const [word, setWord] = useState("");
  const [corrects, setCorrects] = useState<string[]>([]);
  const [fails, setFails] = useState<string[]>([]);
  const [status, setStatus] = useState<string | null>(null);

  const reset = () => {
    setWord(randomizeWord());
    setCorrects([]);
    setFails([]);
    setStatus(null);
  };

  useEffect(reset, []);

  const maskWord = word
    .split("")
    .map((letter) => (corrects.includes(letter) ? letter : "_"))
    .join(" ");

  const onGuess = (letter: string) => {
    if (word.includes(letter)) {
      setCorrects([...corrects, letter]);
    } else {
      setFails([...fails, letter]);
    }
  };

  useEffect(() => {
    if (
      corrects.length &&
      word.split("").every((letter) => corrects.includes(letter))
    )
      setStatus("win");
  }, [corrects]);

  useEffect(() => {
    if (fails.length === 10) setStatus("lose");
  }, [fails]);

  return (
    <div>
      <p className="mask">{maskWord}</p>
      {alphabets.map((letter, index) => (
        <button
          disabled={
            corrects.includes(letter) || fails.includes(letter) || !!status
          }
          onClick={() => onGuess(letter)}
          key={index}
        >
          {letter}
        </button>
      ))}
      <Progress fails={fails.length} />
      <Popup status={status} word={word} reset={reset} />
    </div>
  );
};

export default Hangman;
