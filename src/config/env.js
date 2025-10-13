import { Pool } from 'pg';

export const env = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    hostname: process.env.DB_HOSTNAME,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
};

export const url = `postgres://${env.username}:${env.password}@${env.hostname}:${env.port}/${env.database}`;

export const pool = new Pool({
    connectionString: url,
});