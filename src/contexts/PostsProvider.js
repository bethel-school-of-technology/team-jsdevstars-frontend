import axios from 'axios';
import React, { useEffect, useState } from 'react';
import PostsContext from './PostsContext';

export const PostsProvider = (props) => {

  const [forum, setForum] = useState([]);
  const baseUrl = "http://localhost:3000/api/forum/";

  useEffect(() => {
    async function fetchData() {
      fetchData();
    }
  });

  // function getAllForums() {
  //   return axios.get(baseUrl).then(response => setPosts(response.data))
  // };

  // function getForum(id) {
  //   return axios.get(baseUrl + id).then(response => setPosts(response.data));
  // }

  function newForum(postTitle, postContent) {
    let newForum = { postTitle, postContent };
    return axios.post(baseUrl, newForum)
      .then(response => {
        return new Promise(resolve => resolve(response.data));
      }
      );
  }

  // function editPosts(posts, id) {
  //   let token = localStorage.getItem('myPostsToken')
  //   let headers = {
  //     Authorization: 'Bearer ' + token
  //   };
  //   return axios.put(baseUrl + id, posts, { headers })
  //     .then(response => {
  //       getAllPosts();
  //       return new Promise(resolve => resolve(response.data));
  //     }
  //     );
  // }

  // function deletePosts(id) {
  //   let token = localStorage.getItem('myPostsToken')
  //   let headers = {
  //     Authorization: 'Bearer ' + token
  //   };
  //   return axios.delete(baseUrl + id, { headers })
  //     .then(response => {
  //       getAllPosts();
  //       return new Promise(resolve => resolve(response.data));
  //     })
  // };

  return (
    <PostsContext.Provider value={{
      // forum,
      // getForums,
      newForum
      // editForum,
      // deleteForum,
      // forumList
    }}>
      {props.children}
    </PostsContext.Provider>
  )
};


//
// import { RequestHandler } from "express";
// import { Forum } from "../models/forum";
// import { ForumComment } from "../models/forumComment";
// import { User } from "../models/user";
// import { verifyUser } from "../services/auth";

// /* Retrieves list of all forums */
// export const getAllForums: RequestHandler = async (req, res, next) => {
//   let forumList: Forum[] = await Forum.findAll();
//   res.status(200).json(forumList);
// }

// /* Retrieves a single forum along with all associated forum comments */
// export const getForumById: RequestHandler = async (req, res, next) => {
//   let forumId = parseInt(req.params.forumId);
//   let forum: Forum | null = await Forum.findByPk(forumId);
//   if (forum) {
//     let forumCommentList: ForumComment[] = await ForumComment.findAll({ where: { forumId: forumId } });
//     let packet = {
//       forum: forum,
//       comments: forumCommentList
//     };
//     res.status(200).json(packet);
//   } else {
//     res.status(450).send("These are not the forums you are looking for.");
//   }
// }

// /* Creates a new forum */
// export const createForum: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(451).send("You shall not pass! ...sign in to create a forum.");
//   }

//   const newForum: any = Forum.build(req.body);
//   newForum.userId = user.userId;
//   await newForum.save();
//   if (newForum) {
//     res.status(200).json(newForum);
//   } else {
//     res.status(452).send("No go.");
//   }

// }

// /* Edits a forum */
// export const editForum: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(457).send("You shall not pass! ...sign in to edit your forum.");
//   }

//   let forumId = parseInt(req.params.forumId);

//   // Check if the current user is the author of the forum
//   let forum: any | null = await Forum.findByPk(forumId);
//   if (forum.userId != user.userId) {
//     return res.status(463).send("Thou shalt not edit thy neighbor's forum.");
//   }

//   const editedForum: any = req.body;
//   editedForum.userId = user.userId;

//   let [updated] = await Forum.update(editedForum, {
//     where: { forumId: forumId }
//   });

//   if (updated === 1) {
//     let forum: Forum | null = await Forum.findByPk(forumId);
//     res.status(200).json(forum);
//   } else {
//     res.status(459).send('Update failed');
//   }
// }

// /* Deletes forum */
// export const deleteForum: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(462).send("You shall not pass! ...sign in to delete a forum.");
//   }

//   let forumId = parseInt(req.params.forumId);

//   // Check if the current user is the author of the forum
//   let forum: any | null = await Forum.findByPk(forumId);
//   if (forum.userId != user.userId) {
//     return res.status(464).send("Did you have something against the author of this forum?");
//   }

//   let deleted = await Forum.destroy({
//     where: { forumId: forumId }
//   });

//   if (deleted) {
//     res.status(200).send('deleted');
//   } else {
//     res.status(460).render('Deletion failed');
//   }
// }

// /* Retrieves a single forum comment */
// export const getForumCommentById: RequestHandler = async (req, res, next) => {
//   let forumCommentId = parseInt(req.params.forumCommentId);
//   let forumComment: ForumComment | null = await ForumComment.findByPk(forumCommentId);
//   if (forumComment) {
//     res.status(200).json(forumComment);
//   } else {
//     res.status(465).send("These are not the forum comments you are looking for.");
//   }
// }


// /* Creates a new forum comment */
// export const createForumComment: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(467).send("You shall not pass! ...sign in to comment on a forum.");
//   }

//   const newForumComment: any = ForumComment.build(req.body);
//   newForumComment.userId = user.userId;
//   newForumComment.forumId = parseInt(req.params.forumId);
//   await newForumComment.save();
//   if (newForumComment) {
//     res.status(200).json(newForumComment);
//   } else {
//     res.status(468).send("No go.");
//   }
// }

// /* Edits a forum comment */
// export const editForumComment: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(469).send("You shall not pass! ...sign in to edit your comment.");
//   }

//   let forumCommentId = parseInt(req.params.forumCommentId);

//   // Check if the current user is the author of the forum
//   let forumComment: any | null = await ForumComment.findByPk(forumCommentId);
//   if (forumComment.userId != user.userId) {
//     return res.status(463).send("Thou shalt not edit thy neighbor's comment.");
//   }

//   const editedForumComment: any = req.body;
//   editedForumComment.userId = user.userId;
//   editedForumComment.forumId = parseInt(req.params.forumId);

//   let [updated] = await ForumComment.update(editedForumComment, {
//     where: { forumCommentId: forumCommentId }
//   });

//   if (updated === 1) {
//     let forumComment: ForumComment | null = await ForumComment.findByPk(forumCommentId);
//     res.status(200).json(forumComment);
//   } else {
//     res.status(470).send('Update failed');
//   }
// }

// /* Deletes forum comment */
// export const deleteForumComment: RequestHandler = async (req, res, next) => {
//   let user: User | null = await verifyUser(req);

//   if (!user) {
//     return res.status(471).send("You shall not pass! ...sign in to delete a forum comment.");
//   }

//   let forumCommentId = parseInt(req.params.forumCommentId);

//   // Check if the current user is the author of the forum comment
//   let forumComment: any | null = await ForumComment.findByPk(forumCommentId);
//   if (forumComment.userId != user.userId) {
//     return res.status(473).send("Trying to delete another's comment?");
//   }

//   let deleted = await ForumComment.destroy({
//     where: { forumCommentId: forumCommentId }
//   });

//   if (deleted) {
//     res.status(200).send('deleted');
//   } else {
//     res.status(474).send('Deletion failed');
//   }
// }