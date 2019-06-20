import express from 'express';
import danhsachthisinhController from './danhsachthisinh.controller';

export const danhsachthisinhRouter = express.Router();
danhsachthisinhRouter
  .route('/')
  .post(danhsachthisinhController.create)
  .get(danhsachthisinhController.findAll);

danhsachthisinhRouter
  .route('/:id')
  .get(danhsachthisinhController.findOne)
  .delete(danhsachthisinhController.delete)
  .put(danhsachthisinhController.update);

danhsachthisinhRouter.get('/find-by-date/:date', danhsachthisinhController.getAllThiSinhByDate);
danhsachthisinhRouter.get('/find-by-maso/:maso', danhsachthisinhController.getThiSinhByMaso);
