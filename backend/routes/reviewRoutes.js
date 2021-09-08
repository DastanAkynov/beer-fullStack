const {Router} = require('express');
const router = Router();
const controllers = require('../controllers/reviewControllers')

router.get('/:id', controllers.getAll)
router.post('/create', controllers.create)


module.exports = router;