it('teste de login', () => {
    cy.api({
        method: 'GET',
        url: '/user/login',
        failOnStatusCode: false,
        body:{
            "username": "epaminondas",
            "password": "ewwee12"
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
     
      
    })
});
it('teste de logout', () => {
    cy.api({
        method: 'GET',
        url: '/user/logout',
        failOnStatusCode: false,
        body:{
          
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
     
      
    })
});

it('teste de login com username vazio', () => {
    cy.api({
        method: 'GET',
        url: '/user/login',
        failOnStatusCode: false,
        body:{
            "username": "",
            "password": ""
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
     
      
    })
});