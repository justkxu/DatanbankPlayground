import {Schueler} from '../../domain/Schueler';

export interface SchuelerRepository {
  findAll(): Promise<Schueler[]>;

  findById(id: number): Promise<Schueler>;

  addSchueler(vorname: string, nachname: string, klasse: number): Promise<boolean>;
}