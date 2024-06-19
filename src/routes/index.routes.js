import {pool} from '../db.js';
import {Router} from 'express';
import {selectUsuarios} from '../controllers/index.controller.js';

const router = Router();

router.get('/users', selectUsuarios)

 
export default router;