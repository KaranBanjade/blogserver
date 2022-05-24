const express = require("express");
const router = new express.Router();
const sequelize = require("../db/conn");
const {QueryTypes} = require('sequelize');
const BlogModel = require("../models/schema");

router.post('/insert', (req, res) => {
    const data = req.body;
    const query = `insert into blogs (topic, author, description, tags) values('${data.topic}', '${data.author}','${data.description}', '${data.tags}')`;
    sequelize.query(query, {
        type: QueryTypes.INSERT
    })
    .then((data)=>{
        res.send("Data Added Successfully");
        console.log(data);
    })
    .catch((error) =>{
        res.send(error.message);
        console.error(error);
    } )
})
router.get("/get/:id", (req,res)=>{
    let id = req.params.id;
    const query = `select * from blogs where id = ${id}`;
    sequelize.query(query, {
        type: QueryTypes.SELECT
    })
    .then((data)=>{
        res.send(data);
        console.log(data);
    })
    .catch((error) =>{
        res.send(error.message);
        console.error(error);
    } )
})

router.put("/update/:id", (req,res)=>{
    let id  = req.params.id;
    let data = req.body;
    const query = `update blogs set topic = '${data.topic}', author = '${data.author}', description = '${data.description}', tags = '${data.tags}' where id = ${id};`
    sequelize.query(query, {type: QueryTypes.UPDATE})
    .then((data)=>{
        res.send("Data Updated Successfully");
        console.log(data);
    })
    .catch((error) =>{
        res.send(error.message);
        console.error(error);
    } )
})

router.delete('/delete/:id', (req,res)=>{
    let id = req.params.id;
    const query = `delete from blogs where id = ${id}`
    sequelize.query(query, {type: QueryTypes.DELETE})
    .then((data)=>{
        res.send("Data Deletd Successfully");
        console.log(data);
    })
    .catch((error) =>{
        res.send(error.message);
        console.error(error);
    } )
})
router.get('/filter', (req,res)=>{
    const data = req.body;
        const query = `select * from blogs where ${data.field} like '%${data.queryString}%'`;
        sequelize.query(query, {type: QueryTypes.SELECT})
        .then((data)=>{
            res.send(data);
            console.log(data);
        })
        .catch((error) =>{
            res.send(error.message);
            console.error(error);
        } )
})
module.exports = router