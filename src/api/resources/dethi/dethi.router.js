import express from 'express';
import dethiController from './dethi.controller';

export const dethiRouter = express.Router();
dethiRouter
  .route('/')
  .post(dethiController.create)
  .get(dethiController.findAll);

dethiRouter
  .route('/:id')
  .get(dethiController.findOne)
  .delete(dethiController.delete)
  .put(dethiController.update);

dethiRouter.get('/find-by-date/:date', dethiController.findByDate)
