import * as Yup from 'yup';

import RoadMap from '../models/RoadMap';


 class RoadMapController {
   async store(req, res) {
    const schema = Yup.object().shape({
      title: Yup.string().required(),
      content: Yup.string()
        .required(),
        discipline_id: Yup.number()
        .required()
    });
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }
    const {discipline_id,title,content, tag} = req.body;
    if(discipline_id<1 || discipline_id>6){
      return res.status(400).json({ error: 'Validation fails' });
    }
     const post = await Post.create({
      user_id: req.userId,
      discipline_id: discipline_id,
      content: content,
      title: title,
      tag: tag
    });
     return res.json(post);
   }
   async index(req,res){
     const {category} = req.params;
     const posts = await Post.findAll({
            where: {
              discipline_id: category,
            },
          })
      if(posts.length == 0){
        return res.json({message: "Não há nenhum artigo com esta disciplina"})
      }
      return res.json(posts)
   }
   async indexId(req,res){
     const {postId} = req.params
     const postExist = await Post.findByPk(postId)
     if(!postExist){
      return res
              .status(404)
              .json({ error: 'Artigo não encontrado ):' });
   }

   return res.json(postExist);
 }
}

 export default new PostController();
