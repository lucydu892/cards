import { Card, Formen } from "./Card.ts";

export class Deck {
  played: Card[] = [];
  unplayed: Card[] = [];

  constructor() {
    const formen = [
      Formen.eicheln,
      Formen.schilten,
      Formen.schellen,
      Formen.rosen,
    ];
    const werte = [6, 7, 8, 9, 10, 11, 12, 13, 14];

    for (const f of formen) {
      for (const w of werte) {
        this.unplayed.push(new Card(f, w));
      }
    }
  }
  //Die Methode würde eine zufällige Karte zurückgeben, sie von „unplayed” entfernen und zu „played” hinzufügen.
  play(): Card {
    const index = Math.floor(Math.random() * this.unplayed.length);
    const card = this.unplayed.splice(index, 1)[0];
    this.played.push(card);
    return card;
  }
}
