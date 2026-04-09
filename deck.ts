import {Card, Formen} from "./Card.ts";

export class Deck {
    played: Card[] = []
    unplayed: Card[] = []
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
}