'use strict';

const {Sequelize, DataTypes} = require('sequelize');
const  city = require('./city.model.js');
const series = require('./series.model.js');
// prepare the connection
const POSTGRES_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

// for ssl
// uncommint when i did deploy this
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false,
         
        },
        // dialect: 'postgres'
      }
} : {};

let sequelize = new Sequelize(POSTGRES_URL,sequelizeOptions);

module.exports = {
  db: sequelize,  // for connection and to use this in index.js
  City: city(sequelize,DataTypes), // for creat table and use this in routes
  Series: series(sequelize,DataTypes)
}