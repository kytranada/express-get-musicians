const express = require("express");
const app = express();
const { Musician } = require("../models/index")
const { Band } = require("../models/index")
const { db } = require("../db/connection")

const port = 3000;

//TODO: Create a GET /musicians route to return all musicians 
app.get('/musicians', async (req,res) => {
    try{
    const music = await Musician.findAll({})
    res.json(music)  
    } catch (err){
        res.status(500).send(err.message);
    }
})

app.get('/musicians/1', async (req,res) => {
    try{
    const music = await Musician.findByPk(1)
    res.json(music)
    } catch(err) {
        res.status(500).send(err.message);
    }
})

app.get('/musicians/2', async (req,res) => {
    try{
    const music = await Musician.findByPk(2)
    res.json(music)
    } catch(err) {
        res.status(500).send(err.message);
    }
})

app.get('/musicians/3', async (req,res) => {
    try{
    const music = await Musician.findByPk(3)
    res.json(music)
    } catch(err) {
        res.status(500).send(err.message);
    }
})

app.get('/bands', async (req,res) => {
    try{
        const band = await Band.findAll()
        res.json(band)
    } catch (err){
        res.status(500).send(err.message)
    }
})

app.get('/bands/1', async (req,res) => {
    try{
        const band = await Band.findByPk(1)
        res.json(band)
    } catch (err){
        res.status(500).send(err.message)
    }
})

app.get('/bands/2', async (req,res) => {
    try{
        const band = await Band.findByPk(2)
        res.json(band)
    } catch (err){
        res.status(500).send(err.message)
    }
})

app.get('/bands/3', async (req,res) => {
    try{
        const band = await Band.findByPk(3)
        res.json(band)
    } catch (err){
        res.status(500).send(err.message)
    }
})


module.exports = app;