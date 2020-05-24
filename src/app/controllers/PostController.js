 import Post from '../models/Post';
 import User from '../models/User';
 import Discipline from '../models/Discipline';

 class PostController {
   async store(req, res) {
     const {discipline_id,user_id,title,content } = await Post.create(req.Body);
     return res.json(req.body);
   }
 }

 export default new PostController();
