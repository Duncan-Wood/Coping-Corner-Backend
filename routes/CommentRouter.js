const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/', controller.GetAllComments)
router.get('/byPost/:resource_id', controller.GetCommentsByResource)
router.get('/:comment_id', controller.GetCommentById)
router.post('/:resource_id', middleware.stripToken, middleware.verifyToken, controller.CreateComment)
router.put('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.UpdateComment)
router.delete('/:comment_id', middleware.stripToken, middleware.verifyToken, controller.DeleteComment)

module.exports = router
