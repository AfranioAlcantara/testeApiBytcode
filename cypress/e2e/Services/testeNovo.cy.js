it('teste de criação', () => {
    cy.api({
        method: 'POST',
        url: '/user',
        failOnStatusCode: false,
        body:{
            
            "id": 100,
            "username": "ressrws",
            "firstName": "tuturial",
            "lastName": "youtube",
            "email": "tutorialyoutube@tuto.com",
            "password": "ewwee12",
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
        url: '/user/ressrws',
        failOnStatusCode: false,
        body:{
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.username).to.eq("ressrws")
        expect(response.body.firstName).to.eq("tuturial")
        expect(response.body.lastName).to.eq("youtube")
        expect(response.body.email).to.eq("tutorialyoutube@tuto.com")
        expect(response.body.password).to.eq("ewwee12")
        expect(response.body.phone).to.eq("85 8896558")
        
    })
});
it('teste de criação', () => {
    cy.api({
        method: 'PUT',
        url: '/user/ressrws',
        failOnStatusCode: false,
        body:{
            
            "id": 100,
            "username": "epaminondas",
            "firstName": "tuturial",
            "lastName": "youtube",
            "email": "tutorialyoutube@tuto.com",
            "password": "ewwee12",
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
        url: '/user/ressrws',
        failOnStatusCode: false,
        body:{
            
        }
    }).then((response)=>{
        expect(response.status).to.eq(404)  
    })
});
