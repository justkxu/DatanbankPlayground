import { SchuelerService } from '../application/SchuelerService';
import { SchuelerRepositoryImpl } from '../infrastructure/SchuelerRepositoryImpl';

async function main() {
  const schuelerRepository = new SchuelerRepositoryImpl();
  const schuelerService = new SchuelerService(schuelerRepository);

  const schuelerList = await schuelerService.getAllSchueler();
  schuelerList.forEach(schueler => console.log(`${schueler.vorname} ${schueler.nachname}`));
}

main();