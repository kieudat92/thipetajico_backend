import Danhsachthisinh from './danhsachthisinh.model';
import * as responseAction from '../../utils/responseAction'

export default {
  async create(req, res) {
    let body = req.body
    try {
      const danhsachthisinh = await Danhsachthisinh.create(body);
      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
        responseAction.error(res, 500, err.errors)
        return
    }
  },
  async findAll(req, res) {
    try {

      const danhsachthisinh = await Danhsachthisinh.find({is_deleted: false})
      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async findOne(req, res) {
    try {
      const { id } = req.params;
      const danhsachthisinh = await Danhsachthisinh.findOne({_id: id, is_deleted: false});
      if (!danhsachthisinh) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const danhsachthisinh = await Danhsachthisinh.findOneAndUpdate({ _id: id }, {is_deleted: true}, { new: true });
      if (!danhsachthisinh) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      let body = req.body
      const danhsachthisinh = await Danhsachthisinh.findOneAndUpdate({ _id: id }, body, { new: true });
      if (!danhsachthisinh) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },
  async getAllThiSinhByDate(req, res){
    try {
      const { date } = req.params;

      let date_val = new Date(date);
      let startDate = date_val.setHours(0, 0, 0, 0)
      let endDate = date_val.setHours(23, 59, 59, 999)
      const danhsachthisinh = await Danhsachthisinh.find({ is_deleted: false, ngaythi:  {$gte: startDate, $lt: endDate} });

      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },
  async getThiSinhByMaso(req, res){
    try {
      const { maso } = req.params; 
      const danhsachthisinh = await Danhsachthisinh.find({ is_deleted: false, maso:  maso });

      return res.json(danhsachthisinh);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },

};
