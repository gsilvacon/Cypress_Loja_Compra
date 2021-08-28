class detalhePage {
    VisualizarProduto() {
        cy.get('[data-component-id="1"]').click();
    }

    AdicionarCarrinho() {
        cy.wait(3000);
        cy.get('#add-to-cart-button').click()
    }

    VisualizarCarrinho() {
        cy.wait(3000);
        cy.get('a[id]#nav-cart').contains('Carrinho').click();
    }

    FecharPedido() {
        cy.wait(3000);
        cy.get('[value="Proceed to checkout"]').click()        
    }

}

export default new detalhePage();