import Tester from './tester.model';
import * as responseAction from '../../utils/responseAction'

export default {
  async create(req, res) {
    let body = req.body
    try {
      const tester = await Tester.create(body);
      return res.json(tester);
    } catch (err) {
      console.error(err);
        responseAction.error(res, 500, err.errors)
        return
    }
  },
  async findAll(req, res) {
    try {

      const tester = await Tester.find({is_deleted: false})
      return res.json(tester);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async findOne(req, res) {
    try {
      const { id } = req.params;
      const tester = await Tester.findOne({_id: id, is_deleted: false});
      if (!tester) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(tester);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const tester = await Tester.findOneAndUpdate({ _id: id }, {is_deleted: true}, { new: true });
      if (!tester) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(tester);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      let body = req.body
      const tester = await Tester.findOneAndUpdate({ _id: id }, body, { new: true });
      if (!tester) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(tester);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },

  ////////////////
  async findByDate(req, res) {
    try {
      const { date } = req.params;

      let date_val = new Date(date);
      let startDate = date_val.setHours(0, 0, 0, 0)
      let endDate = date_val.setHours(23, 59, 59, 999)
      let tester = await Tester.find({is_deleted: false, created_at: {$gte: startDate, $lt: endDate}}).sort({created_at: -1})
      if(tester){
        return res.json(tester)
      }else{
        return res.json({success: false, message: 'Ngày thi không có đề thi.'})
      }
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
    
  },
};
