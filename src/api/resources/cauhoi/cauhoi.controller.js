import Cauhoi from './cauhoi.model';
import * as responseAction from '../../utils/responseAction'
import fs from 'fs'
import path from 'path';

export default {
  async create(req, res) {
    let body = req.body
	console.log(body);
    try {
      const cauhoi = await Cauhoi.create(body);
      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
        responseAction.error(res, 500, err.errors)
        return
    }
  },
  async findAll(req, res) {
    try {

      const cauhoi = await Cauhoi.find({is_deleted: false})
      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async findOne(req, res) {
    try {
      const { id } = req.params;
      const cauhoi = await Cauhoi.findOne({_id: id, is_deleted: false});
      if (!cauhoi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const cauhoi = await Cauhoi.findOneAndUpdate({ _id: id }, {is_deleted: true}, { new: true });
      if (!cauhoi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      let body = req.body
      const cauhoi = await Cauhoi.findOneAndUpdate({ _id: id }, body, { new: true });
      if (!cauhoi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },

  async uptImage(req, res){

    try {
      let {filename} = req.file
      let {id} = req.params
      // lấy thông tin của cauhoi
      let cauhoi = await Cauhoi.findById(id)
      if(cauhoi && cauhoi.image){
        let pathDel = path.join(process.cwd(), "./uploads/" + cauhoi.image)
        fs.unlink(pathDel, function (err) {
          if (err) throw err;
          // if no error, file has been deleted successfully
          console.log('File deleted!');
        });
      }

      let cauhoi_upt = await Cauhoi.findOneAndUpdate({ _id: id }, {image: filename}, { new: true });
      return res.json(cauhoi_upt);
      
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }

  }
};
