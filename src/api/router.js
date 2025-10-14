import { Router } from 'express';
import { pool } from './config.js';

export const apiRouter = Router();

apiRouter.get('/pessoas', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM get_pessoas_tabela();');
        console.log(result)
        const { rows, rowCount } = result;
        res.json({ count: rowCount, data: rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});

apiRouter.get('/pessoas/:cpf', async (req, res) => {
    const { cpf } = req.params;
    if (!cpf) return res.status(400).json({ error: 'CPF obrigatório' });
    try {
        const result = await pool.query(
            'SELECT * FROM get_pessoa_por_cpf($1)', [cpf]
        );

        if(result.rowCount === 0){
            return res.status(404).json({error: 'Não há nenhuma pessoa com esse CPF'})
        }

        res.json({ data: result.rows });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: err });
    }
});