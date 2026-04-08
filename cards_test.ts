import { assertEquals } from "@std/assert";
import { hello } from "./cards.ts";
import { Card } from "./Card.ts";

Deno.test("hello world", () => {
  assertEquals(hello(), "world");
});

Deno.test("this card is a 8 rosen(0)", () => {
  //Arrange
  const card = new Card(0, 8);
  //Act
  const isRosen = card.Formen;
  const isEight = card.Werte;
  //Assert
  assertEquals(isRosen, 0);
  assertEquals(isEight, 8);
});
