export class Card {
  constructor(
      public Formen: number,
      public Werte: number,
  ) {
  }

  public beats(other: Card): boolean {
    if (other === null) {
      console.log("Take a card");
    } else if (other.Werte < other.Werte) {
      console.log("This card is smaller!");
    } else if (other.Werte === other.Werte) {
      console.log("This card is bigger");
      return true;
      /*} else if (other.Formen === other.Formen) {
        console.log("This card has the same value");
        if (other.Formen === 0) {
          other.Formen
        }*/
    }
    return false;
  }

}
enum Formen {
  rosen = 0,
  schellen = 1,
  schilten = 2,
  eicheln = 3,
}

enum Werte {
  sechs = 6,
  sieben = 7,
  acht = 8,
  neun = 9,
  zehn = 10,
  under = 11,
  ober = 12,
  koenig = 13,
  ass = 14,
}
