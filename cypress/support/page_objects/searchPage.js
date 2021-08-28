
class searchPage{

    PesquisarProduto(produto){
        cy.get('#twotabsearchtextbox').type(produto);
        cy.get('#nav-search-submit-button').click();
    }

}

export default new searchPage();
