import { isZero } from "./src/isZero";

test("check", () => {
  const result = isZero(0);
  expect(result).toBe(true);
  expect(result).toBe(false);
});
