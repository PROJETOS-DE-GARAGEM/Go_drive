import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { CreatePreferenceController } from './controllers/CreatePreferenceController';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const controller = new CreatePreferenceController();

app.post('/create_preference', (req: Request, res: Response) => controller.handle(req, res));

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log('Servidor iniciado!');
});
