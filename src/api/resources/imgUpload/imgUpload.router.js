import express from 'express';
import imgUploadController from './imgUpload.controller';
import multer from 'multer'
import fs from 'fs'

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname  )
  }
})

function extFile(req, file, cb) {
  if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)){
    return cb(new Error('Ảnh không đúng định dạng'))
  }else{
    cb(null, true)
  }
}

let upload = multer({ storage: storage, fileFilter: extFile })

function checkUploadPath(req, res, next) {
  let path = './uploads';
  fs.exists(path, function(exists) {
    if(exists) {
      next();
    }
    else {
      fs.mkdir(path, function(err) {
        if(err) {
          console.log('Error in folder creation');
          next();
        }
        next();
      })
    }
  })
}

export const imgUploadRouter = express.Router();
imgUploadRouter
  .route('/')
  .post(checkUploadPath, upload.single('image'), imgUploadController.create)

imgUploadRouter.get('/:imgNm', imgUploadController.getImageByName)
