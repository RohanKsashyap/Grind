import express from 'express';
import * as allauth from '../controllers/auth-controller.js';
import { validate } from '../Middleware/validate-middleware.js';
import { signupSchema } from '../Validators/auth-validator.js';

const router = express.Router()
 

// router.route('/authcontroller').post(allauth.authcontroller)



router.route("/register").post(validate(signupSchema),allauth.register)
router.route("/login").post((validate(signupSchema),allauth.login))

export default router