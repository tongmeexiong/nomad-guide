const app = require('../server')
const testServer = require('supertest')

describe(' Test routes in server', ()=>{
    
    test('Test Favorites to be protected', async ()=>{
        
        const response = await testServer(app).get('/api/travelpage/favorites')
        expect(response.statusCode).toBe(403)
    })

    test('Test user is logged in', async ()=>{
        let agent = testServer.agent(app);
        const response = await agent.post('/api/user/login')
        .send({username: 'user', password: 'pw'})
        expect(response.statusCode).toBe(200)
        console.log('User', response);
        
        const favoriteResponse = await agent.get('/api/travelpage/favorites')
        expect(favoriteResponse.statusCode).toBe(200) 
        console.log('favorite', favoriteResponse);
           
    })
})

