import { SchuelerService } from '../application/SchuelerService';
import { SchuelerRepositoryImpl } from '../infrastructure/schueler/SchuelerRepositoryImpl';

async function main() {
  const schuelerRepository = new SchuelerRepositoryImpl();
  const schuelerService = new SchuelerService(schuelerRepository);

  const schuelerList = await schuelerService.getAllSchueler();
  schuelerList.forEach(schueler => console.log(`${schueler.vorname} ${schueler.nachname} ${schueler.klasse}`));

  const schuelerById = await schuelerService.getSchuelerById(1);
  console.log(JSON.stringify(schuelerById))

  const newSchueler = await schuelerService.addSchueler('Phlip', 'Mueller', 1);
  console.log(newSchueler);

  let updatedSchuelerList = await schuelerService.getAllSchueler();
  updatedSchuelerList.forEach(schueler => console.log(`${schueler.vorname} ${schueler.nachname} ${schueler.klasse}`));

  const deletedSchueler = await schuelerService.deleteSchuelerById(1);
  console.log(deletedSchueler);

  updatedSchuelerList = await schuelerService.getAllSchueler();
  updatedSchuelerList.forEach(schueler => console.log(`${schueler.vorname} ${schueler.nachname} ${schueler.klasse}`));
}

main();