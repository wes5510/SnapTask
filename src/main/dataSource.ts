import { DataSource } from 'typeorm';
import { Task } from './task';

export let appDataSource = new DataSource({
  database: '../../demo.db',
  type: 'better-sqlite3',
  // synchronize: true,
  logging: true,
  entities: [Task],
});

export function updateDatabase(database: string) {
  if (appDataSource) {
    appDataSource.destroy();
    appDataSource = new DataSource({
      database: database ?? '../../demo.db',
      type: 'better-sqlite3',
      // synchronize: true,
      logging: true,
      entities: [Task],
    });
  }
}
