const request = require('supertest');

const server = require ('./server.js');

describe('server component testing',()=>{
describe('get / functionality',()=>{

  it('returns status 200',async()=>{
    const res = await request(server).get('/games') 
    expect (res.status).toBe(200);
  })

  it('returns an empty array',async()=>{
    const res = await request(server).get('/games')
    expect (res.body).toEqual([]);
  })

  it('returns truthy ',async()=>{
    const res = await request(server).get('/games')
    expect (res.body).toBeTruthy()
  })



})
describe('post /functionality',()=>{

})

})
