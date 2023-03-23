const router = require('express').Router()
const controller = require('../controllers/FavoriteController')
const middleware = require('../middleware')


router.get('/:user_id/', middleware.stripToken, middleware.verifyToken, controller.GetUserFavorites)
router.get('/:user_id/:resource_id', middleware.stripToken, middleware.verifyToken, controller.GetUserFavoriteMatch)
router.post('/add/:user_id/:resource_id', middleware.stripToken, middleware.verifyToken, controller.SaveResource)
router.delete('/:user_id/:resource_id', middleware.stripToken, middleware.verifyToken, controller.DeleteFavorite)

module.exports = router