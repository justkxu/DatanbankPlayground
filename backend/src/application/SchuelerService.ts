import {Schueler} from '../domain/Schueler';
import {SchuelerRepository} from '../infrastructure/schueler/SchuelerRepository';

export class SchuelerService {
  private schuelerRepository: SchuelerRepository;

  constructor(schuelerRepository: SchuelerRepository) {
    this.schuelerRepository = schuelerRepository;
  }

  public async getAllSchueler(): Promise<Schueler[]> {
    return this.schuelerRepository.findAll();
  }

  public async getSchuelerById(id: number): Promise<Schueler> {
    return this.schuelerRepository.findById(id);
  }

  public async deleteSchuelerById(id: number): Promise<boolean> {
    return this.schuelerRepository.deleteById(id);
  }

  public async addSchueler(vorname: string, nachname: string, klasse: number): Promise<boolean> {
    return this.schuelerRepository.addSchueler(vorname, nachname, klasse);
  }
}