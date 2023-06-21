it('teste de criação validação de id 100', () => {
    cy.api({
        method: 'POST',
        url: '/user',
        failOnStatusCode: false,
        body:{
            
            "id": 150,
            "username": "joaozinho",
            "firstName": "lustrosa",
            "lastName": "ermeti",
            "email": "lustroermeti@tuto.com",
            "password": "45587ermet",
            "phone": "85 8896558",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        
        
    })
});
it('teste de criação', () => {
    cy.api({
        method: 'GET',
        url: '/user/joaozinho',
        failOnStatusCode: false,
        body:{
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(150)
        expect(response.body.username).to.eq("joaozinho")
        expect(response.body.firstName).to.eq("lustrosa")
        expect(response.body.lastName).to.eq("ermeti")
        expect(response.body.email).to.eq("lustroermeti@tuto.com")
        expect(response.body.password).to.eq("45587ermet")
        expect(response.body.phone).to.eq("85 8896558")
        
    })
});
it('teste de criação', () => {
    cy.api({
        method: 'DELETE',
        url: '/user/joaozinho',
        failOnStatusCode: false,
        body:{
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)  
        
    })
});
it('teste de criação', () => {
    cy.api({
        method: 'GET',
        url: '/user/joaozinho',
        failOnStatusCode: false,
        body:{
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(404)
     
      
    })
});