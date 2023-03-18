const { Comment } = require('../models')

const GetAllComments = async (req, res) => {
  try {
    const comments = await Comment.findAll()
    res.send(comments)
  } catch (error) {
    throw error
  }
}

const GetCommentsByResource = async (req, res) => {
    try {
      const comments = await Comment.findAll(
        { where: { resource_id: req.params.resource_id }, returning: true }
      )
      res.send(comments)
    } catch (error) {
      throw error
    }
  }

  const GetCommentById = async (req, res) => {
    try {
      const comment = await Comment.findOne(
        { where: { id: req.params.comment_id }, returning: true }
      )
      res.send(comment)
    } catch (error) {
      throw error
    }
  }
  
  

const CreateComment = async (req, res) => {
  try {
    const comment = await Comment.create({ ...req.body },
        { where: { id: req.params.resource_id }, returning: true })
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const UpdateComment = async (req, res) => {
  try {
    const comment = await Comment.update(
      { ...req.body },
      { where: { id: req.params.comment_id }, returning: true }
    )
    res.send(comment)
  } catch (error) {
    throw error
  }
}

const DeleteComment = async (req, res) => {
  try {
    await Comment.destroy({ where: { id: req.params.comment_id} })
    res.send({ msg: 'Comment Deleted', payload: req.params.resource_id, status: 'Ok' })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllComments,
  GetCommentsByResource,
  GetCommentById,
  CreateComment,
  UpdateComment,
  DeleteComment
}
