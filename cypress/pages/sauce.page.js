import Base from './_base.page'
import { Login as log } from './components/sauce.elements'
export class Sauce extends Base {

    static acessar_sauce_demo(){
        cy.visit('/')
}

static logar_sauce_demo(){
    super.typeValue(log.INP_USER, 'standard_user')
    cy.get(log.INP_PASSWORD).type('secret_sauce')
    super.clickOnElement(log.BTN_LOGIN)
   }

}