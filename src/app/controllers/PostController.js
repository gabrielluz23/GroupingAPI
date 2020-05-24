// import Post from '../models/Post';
// import User from '../models/User';
// import Discipline from '../models/Discipline';

// class PostController {
//   async store(req, res) {
//     const {discipline_id,user_id,title,content } = req.Body;
//     const user= User.findBy('id',user_id);
//     const discipline = Discipline.findBy('id',discipline_id);
//     const post = await Post.create({
//      discipline_id,
//      user_id,
//      title,
//      content,
//     });
//     return res.json(post);
//   }
// }

// export default new PostController();
