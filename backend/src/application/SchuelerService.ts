import { Schueler } from '../domain/Schueler';
import { SchuelerRepository } from '../infrastructure/schueler/SchuelerRepository';

export class SchuelerService {
  private schuelerRepository: SchuelerRepository;

  constructor(schuelerRepository: SchuelerRepository) {
    this.schuelerRepository = schuelerRepository;
  }

  public async getAllSchueler(): Promise<Schueler[]> {
    return this.schuelerRepository.findAll();
  }
}