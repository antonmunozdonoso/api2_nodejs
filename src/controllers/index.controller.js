import {pool} from '../db.js';

export const selectUsuarios = async(req, res) => {
    
    try {
        const [result] = await pool.query('SELECT id, nombre, salario FROM users ORDER BY id DESC LIMIT 5')
        res.json(result)
    } catch (error) {
       return res.status(500).json({

        message: error.message,
        code: error.code,
        errorn: error.errno
       }) 
    }
 }