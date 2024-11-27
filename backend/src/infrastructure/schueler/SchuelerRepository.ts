import {Schueler} from '../../domain/Schueler';

export interface SchuelerRepository {
  findAll(): Promise<Schueler[]>;

  findById(id: number): Promise<Schueler>;

  deleteById(id: number): Promise<boolean>;

  addSchueler(vorname: string, nachname: string, klasse: number): Promise<boolean>;
}