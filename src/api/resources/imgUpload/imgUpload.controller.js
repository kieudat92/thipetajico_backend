import path from 'path';

export default {
  async create(req, res) {
    console.log(req.file)
    try {
      let {filename} = req.file
      return res.status(200).send({ success: true, images: filename });
    } catch (err) {
      console.error(err);
      return res.status(500).send(err);
    }
  },
  async getImageByName(req, res){
    let imgNm = req.params.imgNm

    return res.sendFile(path.join(process.cwd(), "./uploads/" + imgNm));
  }
};
