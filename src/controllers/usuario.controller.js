import {pool} from '../db.js';

export const getUsuarios = (req, res ) => res.send('obteniendo usuarios');

export const getRut = async (req, res ) => {
    
    const rut = req.params.rut;
    try {
        //console.log(rut);
        const [rows] = await pool.query('SELECT * FROM users WHERE rut = ?', [rut])
        //puede ser .json o .send
        if (rows.length <=0  ) return res.status(404).json({
            message: 'not found'
        })
        res.send(rows);    
    } catch (error) {
       
        return res.status(500).json({

            message: error
        }) 
    }
};

export const postUsuarios = async (req, res ) => {
    
    const {rut} = req.body;
    try {    
        const [rows] = await pool.query('SELECT * FROM users WHERE rut = ?', [rut])
        if (rows.length <=0  ) return res.status(404).json({
            message: 'not found'
        })
        res.send(rows);  
    } catch (error) {
        
        return res.status(500).json({

            message: error.message,
            code: error.code,
            errorn: error.errno
        })
    }
};

export const insertUsuarios = async (req, res ) => {
    
    const {rut, nombre, salario} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO users (rut, nombre, salario) VALUES (?, ?, ?)', [rut, nombre, salario])
        if (rows.affectedRows <=0  ) return res.status(404).json({
            
            message: 'user not insert'
        })
        res.status(200).json({
            
            id: rows.insertId,
            rut,
            nombre,
            salario
            
        });
        
    } catch (error) {
        return res.status(500).json({

            message: error
        })
    }
};

export const putUsuarios = async (req, res ) => {
    
    const {nombre, salario, rut} = req.body;
    //console.log(rut);
    try {
        
        const [rows] = await pool.query('UPDATE users SET nombre = ?, salario = ? WHERE rut = ? ', [nombre, salario, rut])
        //puede ser .json o .send
        if (rows.affectedRows <=0  ) return res.status(404).json({
            message: 'user not found'
        })
        res.status(200).json({
            message: 'usuario actualizado'
        });
    } catch (error) {
        
        return res.status(500).json({

            message: error.message,
            code: error.code,
            errorn: error.errno
        })
    }
};

export const deleteUsuarios = async (req, res ) => {
    
    const rut = req.body.rut;
    //console.log(rut);
    try {
        
        const [rows] = await pool.query('DELETE FROM users WHERE rut = ?', [rut])
        //puede ser .json o .send
        if (rows.affectedRows <=0  ) return res.status(404).json({
            message: 'user not found'
        })
        res.status(200).json({
            message: 'usuario eliminado'
        });
    } catch (error) {
        
        return res.status(500).json({

            message: error.message,
            code: error.code,
            errorn: error.errno
        })
    }
};