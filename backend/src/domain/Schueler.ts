export class Schueler {
  id: number;
  vorname: string;
  nachname: string;
  klasse: number;

  constructor(id: number, vorname: string, nachname: string, klasse: number) {
    this.id = id;
    this.vorname = vorname;
    this.nachname = nachname;
    this.klasse = klasse;
  }
}