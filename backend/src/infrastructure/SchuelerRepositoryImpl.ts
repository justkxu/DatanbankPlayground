import { Schueler } from '../domain/Schueler';
import { SchuelerRepository } from './SchuelerRepository';
import mysql, { RowDataPacket } from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

export class SchuelerRepositoryImpl implements SchuelerRepository {
  private db: mysql.Pool;

  constructor() {
    this.db = mysql.createPool({
      host: process.env.MYSQL_HOST || 'localhost',
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      port: Number(process.env.MYSQL_PORT) || 3306
    });
  }

  public async findAll(): Promise<Schueler[]> {
    const [rows] = await this.db.query<RowDataPacket[]>('SELECT * FROM Schueler');
    return rows.map((row: any) => new Schueler(row.ID, row.Vorname, row.Nachname, row.Klasse));
  }
}