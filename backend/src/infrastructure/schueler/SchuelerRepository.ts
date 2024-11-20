import { Schueler } from '../../domain/Schueler';

export interface SchuelerRepository {
  findAll(): Promise<Schueler[]>;
}