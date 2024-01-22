const routes =require('express').Router();

const {data} = require('./data');

routes.get('/blog',data);

module.exports={routes}