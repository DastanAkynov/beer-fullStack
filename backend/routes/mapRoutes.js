const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/mapControllers');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

router.get('/', controllers.getAll)
router.post('/', authMiddleware, roleMiddleware, controllers.create)

router.get('/users', authMiddleware, roleMiddleware, controllers.getUsers)

module.exports = router;