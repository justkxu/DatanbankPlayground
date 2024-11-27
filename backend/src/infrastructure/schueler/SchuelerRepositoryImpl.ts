import {Schueler} from '../../domain/Schueler';
import {SchuelerRepository} from './SchuelerRepository';
import {RowDataPacket} from 'mysql2';
import dotenv from 'dotenv';
import pool from '../databaseConnection';

dotenv.config();

export class SchuelerRepositoryImpl implements SchuelerRepository {
  private db;

  constructor() {
    this.db = pool.promise();
  }

  public async findAll(): Promise<Schueler[]> {
    const [rows] = await this.db.query<RowDataPacket[]>(`
        SELECT Schueler.Id, Schueler.Vorname, Schueler.Nachname, Klasse.Name as Klasse
        FROM Schueler
                 INNER JOIN Klasse ON Schueler.Klasse_Id = Klasse.Id
    `);
    return rows.map((row: any) => new Schueler(row.ID, row.Vorname, row.Nachname, row.Klasse));
  }

  public async findById(id: number): Promise<Schueler> {
    const [rows] = await this.db.query<RowDataPacket[]>(`
        SELECT Schueler.Id, Schueler.Vorname, Schueler.Nachname, Klasse.Name as Klasse
        FROM Schueler
                 INNER JOIN Klasse ON Schueler.Klasse_Id = Klasse.Id
        WHERE Schueler.ID = ?
    `, [id]);
    return new Schueler(rows[0].Id, rows[0].Vorname, rows[0].Nachname, rows[0].Klasse);
  }

  public async addSchueler(vorname: string, nachname: string, klasse: number): Promise<boolean> {
    return await this.db.query<RowDataPacket[]>(`
        Insert into Schueler (Vorname, Nachname, Klasse_Id)
        values (?, ?, ?)
    `, [vorname, nachname, klasse]).then(() => true).catch(() => false)
  }
}