Feature: Exemplos simples

    Background: Iniciar na pagina home
      Given que esteja na pagina home
      And que esteja logado

    Scenario: Adicionar produtos ao carrinho
      When adicionar produtos ao carrinho "parametro" 200
      Then a quantidade de itens no carrinho deve aumentar
      And os produtos devem ser adicionados ao carrinho