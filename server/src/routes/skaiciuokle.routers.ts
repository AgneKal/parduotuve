import express from 'express';
import { SkaiciuokleController } from '../controllers/skaiciuokle.controlles';

const skaiciuokleRouter = express.Router();

skaiciuokleRouter.get('/skaiciuoti', SkaiciuokleController.apskaiciuoti)

export {skaiciuokleRouter};