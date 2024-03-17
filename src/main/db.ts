import BetterSqlite3 from 'better-sqlite3';
import path from 'path';

const dbPath = path.resolve('./demo.db');
console.log({ dbPath });
const db: BetterSqlite3.Database = new BetterSqlite3(dbPath);
db.pragma('journal_mode = WAL');

export default db;
