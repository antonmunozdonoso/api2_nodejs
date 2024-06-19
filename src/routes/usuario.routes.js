import {Router} from 'express';
import {getUsuarios, getRut, postUsuarios, putUsuarios, deleteUsuarios, insertUsuarios} from '../controllers/usuario.controller.js';

const router = Router();

router.get('/users', getUsuarios);

router.get('/users/:rut', getRut);

router.post('/postUser', postUsuarios);

router.post('/insert', insertUsuarios);

router.put('/updateUsers', putUsuarios);

router.delete('/users', deleteUsuarios);

export default router;