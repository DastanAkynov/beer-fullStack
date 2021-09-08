const {Router} =  require('express');
const {check} = require('express-validator'); 
const controllers = require('../controllers/authControllers.js');
const authAdminController = require('../controllers/authAdminControllers');

const router = Router();

const registrValidator = [
  check('name', 'Введите ваше имя').notEmpty(),
  check('password', 'Некорректный пароль, не менее 5 символов').isLength({min: 5})
]

const userRegistrValidator = [
  check('name', 'Введите ваше имя').notEmpty(),
  check('address', 'Введите ваш адрес').notEmpty(),
  check('password', 'Некорректный пароль, не менее 5 символов').isLength({min: 5})
]

const loginValidator = [
  check('name', 'Введите ваше имя').notEmpty(),
  check('password', 'Некорректный пароль').exists()
]

//user
router.post('/registration', userRegistrValidator, controllers.registration)
router.post('/login', loginValidator, controllers.login)

//admin
router.post('/admin/registration', registrValidator, authAdminController.registration)
router.post('/admin/login', loginValidator, authAdminController.login)


module.exports = router;