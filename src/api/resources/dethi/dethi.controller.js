import Dethi from './dethi.model';
import Cauhoi from '../cauhoi/cauhoi.model';
import * as responseAction from '../../utils/responseAction'

export default {
  async create(req, res) {
    let body = req.body
    try {
      if(body.random){
        let random = await Cauhoi.aggregate([
          { $match:  {is_deleted: false} },
          { $sample: { size: 3 } }
          ])
        return res.json(random)
      }
	  // check độ dài 30 ....
	  //
      const dethi = await Dethi.create(body);
      return res.json(dethi);
    } catch (err) {
      console.error(err);
        responseAction.error(res, 500, err.errors)
        return
    }
  },
  async findAll(req, res) {
    try {

      const dethi = await Dethi.find({is_deleted: false}).populate('questions')
      return res.json(dethi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },


  async findOne(req, res) {
    try {
      const { id } = req.params;
      const dethi = await Dethi.findOne({_id: id, is_deleted: false}).populate('questions');
      if (!dethi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(dethi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const dethi = await Dethi.findOneAndUpdate({ _id: id }, {is_deleted: true}, { new: true });
      if (!dethi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(dethi);
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      let body = req.body
      const dethi = await Dethi.findOneAndUpdate({ _id: id }, body, { new: true }).populate('questions');
      if (!dethi) {
          responseAction.error(res, 404, '')
          return
      }
      return res.json(dethi);
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },
  async findByDate(req, res) {
    try {
      const { date } = req.params;

      let date_val = new Date(date);
      let startDate = date_val.setHours(0, 0, 0, 0)
      let endDate = date_val.setHours(23, 59, 59, 999)
      let dethi = await Dethi.findOne({is_deleted: false, test_day: {$gte: startDate, $lt: endDate}}).sort({created_at: -1}).populate('questions')
      if(dethi){
        return res.json(dethi)
      }else{
        return res.json({success: false, message: 'Ngày thi không có đề thi.'})
      }

      /*const { date } = req.params;
      let dateFormat = new Date(date);
      let dayDate = dateFormat.getDate()
      let monthDate = dateFormat.getMonth() + 1
      let yearDate = dateFormat.getFullYear()
      console.log(dayDate, monthDate, yearDate)
      const dethi = await Dethi.aggregate([
        { $match: {is_deleted: false} },
        { $sort: { created_at: -1 } },
        {$project: {_id: 1, month: { $month: "$test_day" }, day: { $dayOfMonth: "$test_day" }, year: { $year: "$test_day" }}},
        { $match: {day: dayDate, month: monthDate, year: yearDate} }
      ]);


      if(dethi && dethi.length){
        console.log(dethi[0])
        let _id = dethi[0]._id
        const dethiData = await Dethi.findOne({_id: _id}).populate('questions');
        return res.json(dethiData);
      }else{
        return res.json({success: false, message: 'Ngày kiểm tra chưa có đề thi'});
      }*/
    } catch (err) {
      console.error(err);
      responseAction.error(res, 500, err.errors)
      return
    }
  },
};
