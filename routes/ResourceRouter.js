const router = require('express').Router()
const controller = require('../controllers/ResourceController')
const middleware = require('../middleware')

router.get('/', controller.GetResources)
// router.get('/feeling/:mood', controller.GetResourcesByFeeling)
router.post('/', middleware.stripToken, middleware.verifyToken, controller.CreateResource)
router.put('/:resource_id', middleware.stripToken, middleware.verifyToken, controller.UpdateResource)
router.delete('/:resource_id', middleware.stripToken, middleware.verifyToken, controller.DeleteResource)

module.exports = router
