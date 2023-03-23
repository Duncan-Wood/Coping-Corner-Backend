const Router = require('express').Router()
const AuthRouter = require('./AuthRouter')
const ResourceRouter = require('./ResourceRouter')
const CommentRouter = require('./CommentRouter')
const FavoriteRouter = require('./FavoriteRouter')

Router.use('/auth', AuthRouter)
Router.use('/resource', ResourceRouter)
Router.use('/comment', CommentRouter)
Router.use('/favorite', FavoriteRouter)

module.exports = Router