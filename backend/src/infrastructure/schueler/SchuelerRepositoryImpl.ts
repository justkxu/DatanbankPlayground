import { Schueler } from '../../domain/Schueler';
import { SchuelerRepository } from './SchuelerRepository';
import mysql, { RowDataPacket } from 'mysql2/promise';
import dotenv from 'dotenv';
import pool from "../databaseConnection";

dotenv.config();

export class SchuelerRepositoryImpl implements SchuelerRepository {
  private db: mysql.Pool;

  constructor() {
    this.db = pool
  }

  public async findAll(): Promise<Schueler[]> {
    const [rows] = await this.db.query<RowDataPacket[]>('SELECT * FROM Schueler');
    return rows.map((row: any) => new Schueler(row.ID, row.Vorname, row.Nachname, row.Klasse));
  }
}