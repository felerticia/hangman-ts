import { randomizeWord } from "./helper";

describe("randomize word", () => {
  it("shall return a word", () => {
    const result = randomizeWord();
    expect(result).toBeDefined();
    expect(typeof result).toBe("string");
    expect(result.length).toBeGreaterThan(0);
  });
});
