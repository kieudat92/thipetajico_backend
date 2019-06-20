import express from 'express';
import testerController from './tester.controller';

export const testerRouter = express.Router();
testerRouter
  .route('/')
  .post(testerController.create)
  .get(testerController.findAll);

testerRouter
  .route('/:id')
  .get(testerController.findOne)
  .delete(testerController.delete)
  .put(testerController.update);
testerRouter.
get('/find-by-date/:date', testerController.findByDate)
