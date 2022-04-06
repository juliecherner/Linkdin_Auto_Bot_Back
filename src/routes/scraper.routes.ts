import express, { Request, Response } from 'express';
import { scraperInit } from '../scraper/scraper.controller';

// TODO: Create content and security validation middlewere for all input

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post('/crawler', scraperInit);
