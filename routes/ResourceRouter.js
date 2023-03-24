const router = require('express').Router()
const controller = require('../controllers/ResourceController')
const middleware = require('../middleware')

router.get('/', controller.GetResources)
router.get('/:resource_id', controller.GetSelectedResource)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateResource)
router.put('/like/:resource_id', middleware.stripToken, middleware.verifyToken, controller.AddLike)
router.put('/:resource_id', middleware.stripToken, middleware.verifyToken, controller.UpdateResource)
router.delete('/:resource_id', middleware.stripToken, middleware.verifyToken, controller.DeleteResource)


module.exports = router
