import express from 'express';
import path from 'path';
import { apiRouter } from './api/router.js';

const app = express();

app.use(express.static(path.join(process.cwd(), 'public')));
app.use('/api', apiRouter);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});