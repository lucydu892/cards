export enum Formen {
  rosen = 0,
  schellen = 1,
  schilten = 2,
  eicheln = 3,
}

export enum Werte {
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

export class Card {
  constructor(
    public Formen: number,
    public Werte: number,
  ) {}

  public beats(other: Card): boolean {
    if (this.Werte > other.Werte) return true;
    if (this.Werte < other.Werte) return false;

    return this.Formen > other.Formen;
  }
}
