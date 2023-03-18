const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ResourceRouter = require('./ResourceRouter')
const CommentRouter = require('./CommentRouter')

Router.use('/auth', AuthRouter)
Router.use('/resource', ResourceRouter)
Router.use('/comment', CommentRouter)

module.exports = Router