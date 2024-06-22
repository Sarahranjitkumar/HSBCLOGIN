describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.hsbc.co.in/')
    cy.get('body > div.header-wrapper > div > header > div.header-wrapper-main > div > div.header-main-container.hide-on-mobile-and-tablet > div > div > div > h1 > img').should('have.attr', 'src', '/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg') 
    cy.title().should('eq','HSBC India - Credit Cards, NRI Services, Saving and Deposit');
    cy.contains('Log On').click('topRight',{ force: true});
    cy.contains('Continue to log on with browser').click();
    cy.get('#username_submit_btn').should('exist').and('be.disabled')
    cy.get('#username').type("username");
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').should('exist');
    cy.xpath('//*[@id="username_help_link"]/span/span[1]').click();
    cy.get('h3').contains('Username');
    cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').should('exist');
    cy.xpath('//*[@id="mainContainer"]/username/div[2]/div/div[3]/a/span/span[1]').click();
    cy.screenshot('HSBCLOGIN');


  

  
    

  })
})