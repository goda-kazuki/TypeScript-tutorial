import { isZero } from "./src/index";

test("check", () => {
  const result = isZero(0);
  expect(result).toBe(true);
  expect(result).toBe(false);
});
