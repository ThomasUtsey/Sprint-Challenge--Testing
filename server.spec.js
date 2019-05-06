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
  it('returns status 200',async()=>{
    const res = await request(server).post('/games').send({title:'MW',genre:'war',year:2015}) 
    expect (res.status).toBe(201);
  })
  it('returns status 422 upon empty title',async()=>{
    const res = await request(server).post('/games').send({title:'',genre:'war',year:2015}) 
    expect (res.status).toBe(422);
  })
  it('returns status 422 upon empty genre',async()=>{
    const res = await request(server).post('/games').send({title:'sdf',genre:'',year:2015}) 
    expect (res.status).toBe(422);
  })
  it('returns status 422 upon empty year',async()=>{
    const res = await request(server).post('/games').send({title:'dfsda',genre:'war',year:''}) 
    expect (res.status).toBe(422);
  })
  it('returns an object upon successfully adding',async()=>{
    const res = await request(server).post('/games').send({title:'ddsf',genre:'war',year:2015}) 
    expect (res.body).toEqual({title:'ddsf',genre:'war',year:2015});
  })
})

})
