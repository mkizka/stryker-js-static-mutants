import { dynamic } from "./dynamic";

it("dynamic", async () => {
  expect(await dynamic()).toBe("dynamic function");
});
