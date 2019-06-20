import express from 'express';
import chudeController from './chude.controller';

export const chudeRouter = express.Router();
chudeRouter
  .route('/')
  .post(chudeController.create)
  .get(chudeController.findAll);

chudeRouter
  .route('/:id')
  .get(chudeController.findOne)
  .delete(chudeController.delete)
  .put(chudeController.update);
  
chudeRouter.get('/:id/cauhoi', chudeController.getAllCauHoiByChude)
