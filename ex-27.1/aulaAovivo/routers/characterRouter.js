const express = require('express');

const characterModel = require('../models/characterModel');
const  router = express.Router();


router.get('/characters', async(req, res)=>{
  try{
    const results = await characterModel.getAll();
    res.status(200).send(results);

  }catch(err){
    console.error(err);
    res.status(500).send({message: "error , entre e contado com seu admin"})
  }

});


router.post('/characters', async(req, res)=>{
  try{
    const {name, cartoon} = req.body;
    const result = await characterModel.add(name, cartoon);
    res.status(201).send(result);

  }catch(err){
    console.error(err);
    res.status(500).send({message: "error , entre e contado com seu admin"})
  }

});

router.get('/characters/:id', async(req, res)=>{
    try{
    const { id } = req.params;
    const result = await characterModel.getById(id);
    res.status(200).send(result);
    
  }catch(err){
    console.error(err);
    res.status(500).send({message: "error , entre e contado com seu admin"})
  }

});

router.put('/characters/:id', async(req, res)=>{
  try{
    const {name, cartoon} = req.body;
    const {id} = req.params;
    const result = await characterModel.update(id, name, cartoon);
    res.status(200).send(result);

  }catch(err){
    console.error(err);
    res.status(500).send({message: "error , entre e contado com seu admin"})
  }

});

router.delete('/characters/:id', async(req, res)=>{
  try{
    const {id} = req.params;
    await characterModel.exclude(id);
    res.status(404).end();

  }catch(err){
    console.error(err);
    res.status(500).send({message: "error , entre e contado com seu admin"})
  }

});

module.exports = router;