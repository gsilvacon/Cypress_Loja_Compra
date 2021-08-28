import Loja from '../support/page_objects/indexPage';
import Search from '../support/page_objects/searchPage';
import Detalhe from '../support/page_objects/detalhePage';

context('Desafio de Teste', () => {

    describe('Carrinho de Compras', () => {

        const produto = "bola de futsal";
        const cep = "78655-000";
        const tamanho = 38;

        before(() => {
            //Loja.AcessarLoja();
        })

        // 1. Pesquisar produto
        it('Pesquisar Produto', () => {
            Loja.AcessarLoja();
            Search.PesquisarProduto(produto)
        });

        // 2. Visualizar Detalhes
        it('Visualizar Detalhes', () => {
            Detalhe.VisualizarProduto();
        });

        // 3. Adicionar na Sacola
        it('Adicionar na Sacola', () => {
            Detalhe.AdicionarCarrinho();
        })

        // 4. Selecionar garantia estendita
        it('Visualizar Carrinho', () => {
            Detalhe.VisualizarCarrinho();      
        });

        // 5. Finalizar Compra
        it('Finalizar Compra', () => {
            Detalhe.FecharPedido();
        });

    })
});