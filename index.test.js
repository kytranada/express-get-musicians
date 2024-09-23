// install dependencies
const { execSync } = require('child_process');
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/connection');
const { Musician } = require('./models/index')
const app = require('./src/app');
const {seedMusician} = require("./seedData");


describe('./musicians endpoint', () => {
    // Write your tests here
    test('Making sure musicians page loads', async () => {
        const response = await request(app).get('/musicians')
        expect(response.statusCode).toBe(200)
    })

    test('Making sure page 1  loads', async () => {
        const response = await request(app).get('/musicians/1')
        expect(response.statusCode).toBe(200)
    })

    test('Making sure page 2 loads', async () => {
        const response = await request(app).get('/musicians/2')
        expect(response.statusCode).toBe(200)
    })

    test('Making sure page 3 loads', async () => {
        const response = await request(app).get('/musicians/3')
        expect(response.statusCode).toBe(200)
    })
})

describe('./bands endpoint', () => {

    test('Making sure bands loads', async () => {
        const response = await request(app).get('/bands')
        expect(response.statusCode).toBe(200)
    })
    test('Making sure page 1  loads', async () => {
        const response = await request(app).get('/bands/1')
        expect(response.statusCode).toBe(200)
    })

    test('Making sure page 2 loads', async () => {
        const response = await request(app).get('/bands/2')
        expect(response.statusCode).toBe(200)
    })

    test('Making sure page 3 loads', async () => {
        const response = await request(app).get('/bands/3')
        expect(response.statusCode).toBe(200)
    })
})