import each from "jest-each";
import { roundFollowers } from "./numbers";

describe("roundFollowers", () => {
  each([
    [100, "100"],
    [21370, "21.4k"],
    [10000, "10k"],
    [696900, "696.9k"],
    [1000000, "1m"],
    [2137000, "2.1m"],
    [9780000, "9.8m"]
  ]).it("should round %d followers to %s", (actual, expected) => {
    const rounded = roundFollowers(actual);
    expect(rounded).toBe(expected);
  });
});
