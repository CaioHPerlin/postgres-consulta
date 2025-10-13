import { Router } from 'express';
import { pool } from './db.js';

export const apiRouter = Router();

apiRouter.get('/hello', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM public.pessoas');
        res.json({ message: result.rows[0].message });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});