const {Router} =  require('express');
const upload = require('../middleware/upload.js')
const controllers = require('../controllers/productControllers');
const authMiddleware = require('../middleware/authMiddleware.js');
const roleMiddleware = require('../middleware/roleMiddleware.js');

const router = Router();

  //user
router.get('/', controllers.getProducts)

  //admin
router.post('/edit/create',authMiddleware, roleMiddleware, upload.single('image'),  controllers.makeNewProducts)
router.delete('/edit/remove/:id', authMiddleware, roleMiddleware, controllers.removeProduct)
router.put('/edit/update/:id', authMiddleware, roleMiddleware, controllers.updateProduct)

module.exports = router;