import express from 'express';

import { cauhoiRouter } from './resources/cauhoi/cauhoi.router';
import { chudeRouter } from './resources/chude/chude.router';
import { dethiRouter } from './resources/dethi/dethi.router';
import { testerRouter } from './resources/tester/tester.router';
import { imgUploadRouter } from './resources/imgUpload/imgUpload.router';
import { danhsachthisinhRouter } from './resources/danhsachthisinh/danhsachthisinh.router';

export const restRouter = express.Router();

restRouter.use('/cauhoi', cauhoiRouter);
restRouter.use('/chude', chudeRouter);
restRouter.use('/dethi', dethiRouter);
restRouter.use('/tester', testerRouter);
restRouter.use('/image', imgUploadRouter);
restRouter.use('/danhsachthisinh', danhsachthisinhRouter);
