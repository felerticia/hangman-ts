import { animals } from "../constants/constants";

export const randomizeWord = () => {
  return animals[Math.floor(Math.random() * animals.length)].toUpperCase();
};
