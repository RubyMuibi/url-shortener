// path = npm test __tests__/unit/utils/shortener.test.ts
import { shortener } from "@/utils/shortener";

describe("shortener for shortening url", () => {
  test("should return a string of max length 4", () => {
    const result = shortener();
    expect(typeof result).toBe("string");
    expect(result.length).toBe(4);
  });

  test("should return a string that is unique each time it is called", () => {
    const result1 = shortener();
    const result2 = shortener();
    const result3 = shortener();
    const result4 = shortener();
    expect(result1).not.toBe(result2);
    expect(result2).not.toBe(result3);
    expect(result3).not.toBe(result4);
  });
});
