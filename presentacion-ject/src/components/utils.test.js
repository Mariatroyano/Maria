const { capitalizeEachWord } = require("./utils");

test("Capitalize each word", (a) => {
  console.log(a);

  expect(capitalizeEachWord("")).toBe("");

  expect(capitalizeEachWord("hola mi nombre es frailejon")).toBe(
    "Hola Mi Nombre Es Frailejon"
  );
});
