'use strict';
const server = require('../src/server.js');

const supertest = require('supertest');
// const { request } = require('express');
const request = supertest(server.app);


describe('testing API server',() => {

 // bad rout
 it(' get status 404 ',async()=>{
  const response = await request.get('/cityy');
  expect(response.status).toBe(404);

});

it(' get status 404 ',async()=>{
  const response = await request.get('/sereee');
  expect(response.status).toBe(404);

});
// bad methode
it(' get status 404  ',async()=>{
 
  const response =await request.post('/city/2');
  expect(response.status).toEqual(404);
  
});



   
});