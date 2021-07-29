/// <reference types="cypress" />
import {Given, When, Then, And, Before} from 'cypress-cucumber-preprocessor/steps'   
import {Sauce} from '../../pages/sauce.page'

Given(`que esteja na pagina home`,() => {
    cy.visit('/')
    Sauce.acessar_sauce_demo()
})

And(`que esteja logado`,() => {
    Sauce.logar_sauce_demo()
})

When(`adicionar produtos ao carrinho {string} {int}` , (args1, args2) => {
    cy.stepNotImplemented()
})

Then(`a quantidade de itens no carrinho deve aumentar`,() => {
    cy.stepNotImplemented()
})

And(`os produtos devem ser adicionados ao carrinho`,() => {
    cy.stepNotImplemented()
})