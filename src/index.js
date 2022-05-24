const { Router } = require("express")
const express = require("express")

const port = process.env.PORT || 3000

require("../src/db/conn")

const app = express()

const BlogModel = require("../src/models/schema")
const router = require("./routers/route")

app.use(express.json())

app.use('/blogs/',router);

app.listen(port, ()=> console.log(`connection setup at ${port}`))
