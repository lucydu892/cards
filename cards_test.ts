import { assertEquals } from "@std/assert";
import { hello } from "./cards.ts";
import {Card} from "./Card.ts";

Deno.test("hello world", () => {
  assertEquals(hello(), "world");
});

Deno.test('this card is a rosen', () => {
  //Arrange
  const card = new Card(0,8);
  //Act
  const actual = card.Formen.;
  //Assert
  assertEquals()
})