import { arrowGreet, greet } from "./greet";

it("should greet me", () => {
  expect(greet("me")).toBe("👋 me");
});

it("should greet me 2", () => {
  expect(arrowGreet("me")).toEqual("👋 me");
});
