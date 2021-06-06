const express = require('express');

//Para usar o MongoDB use essa linha;
const characterModel = require('../models/mongoModel');

//Para usar o MySQL use essa linha;
// const characterModel = require('../model/mysqlModel');

const router = express.Router();

//Busca todas as personagens
router.get('/characters', async (req, res) =>{
    try {
        const result = await characterModel.getAll();
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({message:'Erro ao tentar realizar uma operação'});
    }
});


// Cria uma nova personagem
router.post('/characters', async(req, res) => {
    
    try {
        const {name, cartoon} = req.body;
        const result = await characterModel.add(name, cartoon);
    
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).send('Erro ao tentar realizar operação buscar todos');
    }
  
});

// Busca por uma personagem por ID
router.get('/characters/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const result = characterModel.getById(id);
        
        res.status(200).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao tentar realizar operação buscar id' });
    }
});

router.put('/characters/:id', async (req, res) => {
    try {
        const { name, cartoon } = req.body;
        const { id } = req.params;
    
            
        const result = await characterModel.update(id, name, cartoon);
        console.log(result);
        res.status(201).json(result);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao tentar realizar operação update' });
    }
    });

    router.delete('/characters/:id', async (req, res) => {
    try {
        const { id } = req.params;
    
        await characterModel.exclude(id);
    
        res.end()
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Erro ao tentar realizar operação delete' });
    }
    });


    module.exports = router;