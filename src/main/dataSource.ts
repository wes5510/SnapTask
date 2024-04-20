import { DataSource } from 'typeorm';
import { Task } from './task';

export const AppDataSource = new DataSource({
  type: 'better-sqlite3',
  database: '../../demo.db',
  synchronize: true,
  logging: true,
  entities: [Task],
});
