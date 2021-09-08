const {Router} =  require('express');
const controllers = require('../controllers/orderControllers.js');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware.js');
const router = Router();

router.get('/', authMiddleware, roleMiddleware, controllers.getAll)


router.get('/:userId', controllers.getUserOrder)
router.post('/', controllers.create)

module.exports = router;