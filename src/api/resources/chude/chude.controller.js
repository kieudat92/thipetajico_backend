import Chude from './chude.model';
import * as responseAction from '../../utils/responseAction'
import Cauhoi from '../cauhoi/cauhoi.model';

export default {
  async create(req, res) {
    let body = req.body
    try {
      const chude = await Chude.create(body);
      return res.json(chude);
    } catch (err) {
      console.error(err);
        responseAction.error(res, 500, err.errors)
        return
    }
  },
  async findAll(req, res) {
    try {

      const chude = await Chude.find({is_deleted: false})
      return res.json(chude);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async findOne(req, res) {
    try {
      const { id } = req.params;
      const chude = await Chude.findOne({_id: id, is_deleted: false});
      if (!chude) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(chude);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const chude = await Chude.findOneAndUpdate({ _id: id }, {is_deleted: true}, { new: true });
      if (!chude) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(chude);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      let body = req.body
      const chude = await Chude.findOneAndUpdate({ _id: id }, body, { new: true });
      if (!chude) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(chude);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },
  async getAllCauHoiByChude(req, res){
    try {
      const { id } = req.params;
      const cauhoi = await Cauhoi.find({ is_deleted: false, chude_id: id });

      return res.json(cauhoi);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  }
};
