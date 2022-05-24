const express = require("express");
const router = new express.Router();
const sequelize = require("../db/conn");
const {QueryTypes} = require('sequelize');
const BlogModel = require("../models/schema");

router.post('/insert', (req, res) => {
    const data = req.body;
    const query = `insert into blogs (topic, user, description) values('${data.topic}', '${data.user}','${data.description}')`;
    sequelize.query(query, {
        type: QueryTypes.INSERT
    })
    .then((data)=>{
        res.send(data);
        console.log(data);
    })
    .catch(error => console.error(error));
})

module.exports = router