const express = require('express');
const routes = express.Router();

routes.get('/', (req, res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('SELECT * FROM personas', (err, rows)=>{
            if(err) return res.send(err);
            res.json(rows)
        })   
    })  
});

routes.post('/', (req, res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('INSERT INTO personas set ?', [req.body], (err, rows)=>{
            if(err) return res.send(err);
            res.send('el usuario se cargo');
        })   
    })  
});

routes.delete('/:id', (req, res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('DELETE FROM personas WHERE id= ?', [req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('se elimino al usuario');
        })   
    })  
});

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn) =>{
        if(err) return res.send(err);
        conn.query('UPDATE personas set ? WHERE id= ?', [req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err);
            res.send('se actualizo el usuario');
        })   
    })  
});

module.exports = routes;