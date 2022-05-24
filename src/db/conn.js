var {Sequelize} = require('sequelize');

const sequelize = new Sequelize('blogs', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
  });

    sequelize.authenticate().then(()=>{
        console.log("Connected!");
    })
    .catch((error)=>{
        console.log(error);
    })
module.exports = sequelize;